import { Component } from '@angular/core';
import { MyService } from './my-service.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent {
  public message = 'Hello World';

  value: string = '';

  constructor(private myService: MyService) {
    this.value = this.myService.getValue();
  }

  changeValue() {
    this.myService.setValue('new value');
    this.value = this.myService.getValue();
  }
}
