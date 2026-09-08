import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Operation } from "./operation";
import { OperationsService } from "./operations.service";

import { HttpErrorResponse } from "@angular/common/http";

import { of } from "rxjs";

@Component({
  selector: "cf-item",
  template: `
    <h3>Operation detail for Id...</h3>
    <h3>{{ operation | json }}</h3>
    <h4>{{ message }}</h4>
    <h5>{{ fullError | json }}</h5>    
  `,
  styles: [],
})
export class ItemComponent implements OnInit, AfterViewInit {
  private _id: string = "";
  public operation: Operation = new Operation();
  public message: string = "";
  public fullError: any;

  constructor(
    private operationsService: OperationsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log("ngOnInit - item.component");
    this._id = this.getIdFromRoute();
    this.getDataById();
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit - item.component");
  }

  private getIdFromRoute() {
    return this.route.snapshot.params["id"];
  }

  private getDataById() {
    /*  
    // OLD: Sintaxis antigua
    this.operationsService
    .getOperationById(this._id)
    .subscribe(this.showData, this.catchError);
    */
    // FIX: Nueva sintaxis
    this.operationsService.getOperationById(this._id).subscribe({
        next: (data: any) => this.showData(data),
        error: (err: HttpErrorResponse) => this.catchError(err),
        //complete: () => console.info('complete') 
    })
  }

  private showData = (operation: any) => {
    this.operation = operation;
    this.message = `Found data for _id: ${this._id}`;
  };

  private catchError = (err: HttpErrorResponse) => {
    if (err instanceof HttpErrorResponse) {
      this.catchHttpError(err);
    } else {
      this.message = `Unknown error, text: ${err}`;
    }
    this.fullError = err;
  };

  private catchHttpError(err: HttpErrorResponse) {
    if (err.status == 404) {
      this.showNotFoundError();
    } else {
      this.showServerError(err);
    }
  }

  private showNotFoundError() {
    this.message = `NOT FOUND data for _id: ${this._id} !!!`;
    this.fullError = null;
  }

  private showServerError(err: HttpErrorResponse) {
    this.message = `Server returned code ${err.status}, text: ${err.statusText}`;
    this.fullError = err;
  }
}
