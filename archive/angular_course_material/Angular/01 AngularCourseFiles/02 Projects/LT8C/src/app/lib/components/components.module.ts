import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './nav/title.component';
import { RouterModule } from "@angular/router";

import { UserLoginComponent } from "./nav/user-login.component";
import { UserMessageComponent } from "./nav/user-message.component";

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    TitleComponent,
    UserLoginComponent,
    UserMessageComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    NavComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
