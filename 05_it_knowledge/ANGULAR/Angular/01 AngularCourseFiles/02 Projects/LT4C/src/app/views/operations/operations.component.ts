import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'cf-operations',
  template: `
    <cf-new></cf-new>
    <cf-list></cf-list>
  `,
  styles: [
  ]
})
export class OperationsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit - operations.component")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit - operations.component")
  }
}
