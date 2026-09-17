import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { TitleComponent } from './nav/title.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    TitleComponent,
    NavComponent,
    FooterComponent
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
