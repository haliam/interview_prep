import { Component, OnInit } from "@angular/core";
import { StoreService } from "../../store.service";
import { Observable } from "rxjs";

@Component({
  selector: "cf-user-login",
  template: `
    <a
      *ngIf="userIsAnonymous$ | async; else logged"
      routerLink="/credentials/login"
      >Log In</a
    >
    <ng-template #logged><i>Hello... ya estoy legeado!!!</i></ng-template>
  `,
  styles: [],
})
export class UserLoginComponent implements OnInit {
  public userIsAnonymous$: Observable<boolean> | undefined;

  constructor(private store: StoreService) {}

  ngOnInit() {
    this.userIsAnonymous$ = this.store.getUserIsAnonymous$();
  }
}
