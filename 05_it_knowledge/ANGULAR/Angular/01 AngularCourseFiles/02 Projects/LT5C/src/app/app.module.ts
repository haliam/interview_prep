import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from './lib/components/components.module';
import { HomeModule } from './views/home/home.module';
import { NotFoundModule } from './views/not-found/not-found.module';
import { WordcountPipe } from './lib/shared/pipes/wordcount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WordcountPipe,
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
