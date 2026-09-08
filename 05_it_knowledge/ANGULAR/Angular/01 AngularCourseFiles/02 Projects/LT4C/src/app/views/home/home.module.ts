import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { WordcountPipe } from '../../lib/shared/pipes/wordcount.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    WordcountPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
