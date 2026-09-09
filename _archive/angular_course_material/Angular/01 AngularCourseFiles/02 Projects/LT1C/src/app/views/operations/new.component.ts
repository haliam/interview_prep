import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'cf-new',
  template: `
    <p>
      new works!
    </p>
  `,
  styles: [
  ]
})
export class NewComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit - new.component")
  }
  
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit - new.component")
  }

}
