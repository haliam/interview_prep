import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { OperationsRoutingModule } from './operations-routing.module';

import { OperationsComponent } from './operations.component';
import { ListComponent } from './list.component';
import { ItemComponent } from './item.component';
import { NewComponent } from './new.component';

import { ReversePipe } from '../../lib/shared/pipes/reverse.pipe';
import { HighlightDirective } from '../../lib/shared/directives/highlight.directive';


@NgModule({
  declarations: [
    OperationsComponent,
    ListComponent,
    ItemComponent,
    NewComponent,
    ReversePipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    OperationsRoutingModule
  ],
  providers:[
  ]
})
export class OperationsModule { 

  constructor() {
  }
}
