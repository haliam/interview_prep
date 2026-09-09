import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';

import { OperationsComponent } from './operations.component';
import { ListComponent } from './list.component';
import { ItemComponent } from './item.component';
import { NewComponent } from './new.component';


@NgModule({
  declarations: [
    OperationsComponent,
    ListComponent,
    ItemComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    OperationsRoutingModule
  ]
})
export class OperationsModule { }
