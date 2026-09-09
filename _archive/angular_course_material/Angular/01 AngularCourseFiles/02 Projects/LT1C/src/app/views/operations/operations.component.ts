import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'cf-operations',
  template: `
    <cf-list></cf-list>
  `,
  styles: [
  ]
})
export class OperationsComponent implements OnInit, AfterViewInit {
  icon = "demo";

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit - operations.component")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit - operations.component" + this.icon)
  }
}
