import { Component, OnInit, AfterViewInit } from "@angular/core";

import { Operation } from "./operation";

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

  constructor() {}

  ngOnInit(): void {
    console.log("ngOnInit - operations.component");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit - operations.component");
  }

  public saveOperation(operation: Operation) {
    operation._id = new Date().getTime().toString();
    this.operations.push(operation);
    this.numberOfOperations = this.operations.length;
  }

  public deleteOperation(operation: Operation) {
    const index = this.operations.indexOf(operation);
    this.operations.splice(index, 1);
    this.numberOfOperations = this.operations.length;
  }
}
