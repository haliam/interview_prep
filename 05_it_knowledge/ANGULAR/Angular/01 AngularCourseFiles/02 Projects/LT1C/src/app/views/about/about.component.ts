import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-about',
  template: `
    <p>
      about works!
    </p>
    <a routerLink="" class="button button-outline">Go home</a>

  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
