import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  private myValue: string = 'Hello world service';

  constructor() { }

  setValue(value: string) {
    this.myValue = value;
  }

  getValue() {
    return this.myValue;
  }
}
