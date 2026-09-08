import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-footer',
  templateUrl: './footer.component.html',
  styles: [
    `footer {
      border-top: .1rem solid;
      text-align: center;
    }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
