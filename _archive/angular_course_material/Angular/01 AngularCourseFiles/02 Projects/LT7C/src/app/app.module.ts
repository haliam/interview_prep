import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from './lib/components/components.module';
import { HomeModule } from './views/home/home.module';
import { NotFoundModule } from './views/not-found/not-found.module';
import { WordcountPipe } from './lib/shared/pipes/wordcount.pipe';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RequestInterceptorService } from "./lib/shared/interceptors/request-interceptor.service";
import { NothingInterceptorService } from "./lib/shared/interceptors/nothing-interceptor.service";

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
    ComponentsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NothingInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true
    }
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { 

}
