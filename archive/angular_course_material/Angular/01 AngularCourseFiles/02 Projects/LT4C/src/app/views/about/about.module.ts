import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from "./about.routing";
import { RouterModule } from "@angular/router";

import { AboutComponent } from './about.component';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule, AboutRoutingModule, RouterModule
  ]
})
export class AboutModule { }
