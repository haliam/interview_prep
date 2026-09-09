import { Component, OnInit, AfterViewInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'cf-item',
  template: `
    <p>
      item works!
    </p>
    <h3>{{ _id }}</h3>
  `,
  styles: [
  ]
})
export class ItemComponent implements OnInit, AfterViewInit {
  _id: any;

  constructor(private route: ActivatedRoute) { 
    this._id = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    console.log("ngOnInit - item.component")
  }
  
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit - item.component")
  }
}
