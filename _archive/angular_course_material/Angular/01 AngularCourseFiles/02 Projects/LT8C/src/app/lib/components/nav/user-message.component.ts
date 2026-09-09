import { Component, OnInit, OnDestroy } from "@angular/core";
import { StoreService } from "../../store.service";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "cf-user-message",
  template: `
    {{ userMessage$ | async | uppercase }}
    {{ userMessage }}
  `,
  styles: [],
})
export class UserMessageComponent implements OnInit, OnDestroy {

  public userMessage$: Observable<string> | undefined; // {{ userMessage$ | async }}
  public userMessage: string = ""; // {{ userMessage }}

  private subscription: Subscription = new Subscription();

  constructor(private store: StoreService) {}

  ngOnInit() {
    this.userMessage$ = this.store
      .getUserMessage$()
      .pipe(map((message) => message + " --- mapped"));

    this.subscription = this.store
      .getUserMessage$()
      .subscribe((data) => (this.userMessage = data));
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
