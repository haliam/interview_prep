import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'cf-new',
  template: `<h2>{{ title | uppercase }}</h2>
      <p>
      NEW is still a work in progress.
    </p>
  `,
  styles: [
  ],
})
export class NewComponent implements OnInit, AfterViewInit {
  title = "Cash Flow NEW";

  constructor() 
  {
  }

  ngOnInit(): void {
    console.log("ngOnInit - new.component")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit - new.component")
  }

}
