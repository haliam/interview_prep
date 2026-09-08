import { Component } from '@angular/core';

import * as moment from 'moment'; // add this 1 of 4

@Component({
  selector: 'cf-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'New title AppComponent';

  constructor() {
    let now = moment(); // add this 2 of 4
    console.log('hello world', now.format()); // add this 3 of 4
    this.title = now.format();
    console.log(now.add(7, 'days').format()); // add this 4of 4
  }
}
