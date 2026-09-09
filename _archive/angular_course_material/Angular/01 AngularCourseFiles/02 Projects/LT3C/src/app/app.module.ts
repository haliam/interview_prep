import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from './lib/components/components.module';
import { HomeModule } from './views/home/home.module';
import { NotFoundModule } from './views/not-found/not-found.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    NotFoundModule,
    ComponentsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
