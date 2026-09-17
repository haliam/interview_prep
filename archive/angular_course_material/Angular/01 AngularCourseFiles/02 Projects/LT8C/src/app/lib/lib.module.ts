import { NgModule } from "@angular/core";

import { CatchInterceptorService } from "./shared/interceptors/catch-interceptor.service";

import { ComponentsModule } from "./components/components.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { StoreService } from "./store.service";
import { TokenInterceptorService } from "./shared/interceptors/token-interceptor.service";

//import { RequestInterceptorService } from "./shared/interceptors/request-interceptor.service";
//import { NothingInterceptorService } from "./shared/interceptors/nothing-interceptor.service";

@NgModule({
  imports: [ComponentsModule, HttpClientModule],
  exports: [ComponentsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CatchInterceptorService,
      multi: true
    },
    StoreService
  ]
  /*
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
 */
})
export class LibModule {}
