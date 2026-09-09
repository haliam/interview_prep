import { Component, OnInit, AfterViewInit } from "@angular/core";

import { Operation } from "./operation";
import { OperationsService } from "./operations.service";

import { HttpErrorResponse } from "@angular/common/http";
import { of } from "rxjs";

@Component({
  selector: 'cf-operations',
  template: `
    <cf-new
      [numberOfOperations]="numberOfOperations"
      (save)="saveOperation($event)"
    >
    </cf-new>
    <cf-list
      [numberOfOperations]="numberOfOperations"
      [operations]="operations"
      (delete)="deleteOperation($event)"
    >
    </cf-list>
  `,
  styles: [],
})
export class OperationsComponent implements OnInit, AfterViewInit {
  public numberOfOperations = 0;
  public operations: Operation[] = [];
  public message: string = "";
  public fullError: any;

  constructor(private operationsService: OperationsService) {}

  ngOnInit(): void {
    console.log("ngOnInit - operations.component");
    this.refreshData();
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit - operations.component");
  }

  public saveOperation(operation: Operation) {
    /*
    // OLD: Antigua sintaxis
    this.operationsService
      .saveOperation(operation)
      .subscribe(this.refreshData);
    */

    // NEW: Nueva sintaxis
    this.operationsService.saveOperation(operation).subscribe({
      next: () => this.refreshData()
    });
  }

  public deleteOperation(operation: Operation) {
    /*
    // OLD: Sintaxis antigua
    this.operationsService
      .deleteOperation(operation)
      .subscribe(this.refreshData);
    */

    // NEW: Nueva sintaxis
    this.operationsService.deleteOperation(operation).subscribe({
      next: () => this.refreshData()
    });      
  }

  private refreshData = () => {
    this.message = `Refreshing Data`;
    this.fullError = "";

    /*
    // OLD: Sintaxis antigua
    this.operationsService
      .getOperationsList()
      .subscribe(this.showOperations, this.catchError);
    */
    // NEW: Nueva sintaxis
    this.operationsService.getOperationsList().subscribe({
      next: (data: any) => this.showOperations(data),
      error: (err: any) => this.catchError(err)
    });

    /*
    // OLD: Sintaxis antigua
    this.operationsService
      .getNumberOfOperations()
      .subscribe(this.showCount, this.catchError);
    */
    // NEW: Nueva sintaxis
    this.operationsService.getNumberOfOperations().subscribe({
      next: (data: any) => this.showCount(data),
      error: (err: any) => this.catchError(err)
    });

  };

  private showOperations = (operations: Operation[]) => {
    this.operations = operations;
    this.message = `operations Ok`;
  };

  private showCount = (data: any) => {
    this.numberOfOperations = data.count;
    this.message = `count Ok`;
  };

  private catchError = (err: any) => {
    if (err instanceof HttpErrorResponse) {
      this.message = `Http Error: ${err.status}, text: ${err.statusText}`;
    } else {
      this.message = `Unknown error, text: ${err.message}`;
    }
    this.fullError = err;
  };
}
