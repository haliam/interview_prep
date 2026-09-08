import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-title',
  template: `
    <a routerLink="/">{{ title }}</a>
  `,
  styles: [
  ]
})
export class TitleComponent implements OnInit {
  title = "Cash Flow";
  constructor() { }

  ngOnInit(): void {
  }
  
}
