import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { OperationsService } from "./operations.service";
import { Operation } from "./operation";

@Component({
  selector: "cf-item",
  template: `
    <h3>Operation detail for Id...</h3>
    <h4>{{ this.operation?._id }}</h4>
    <h5>{{ this.operation?.description }}</h5>
  `,
  styles: [],
})
export class ItemComponent implements OnInit, AfterViewInit {
  public operation?: Operation = new Operation();

  constructor(
    private operationsService: OperationsService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log("ngOnInit - item.component");
    const id = this.route.snapshot.params["id"];
    this.operation = this.operationsService.getOperationById(id);
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit - item.component");
  }
}