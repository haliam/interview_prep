import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { NotFoundComponent } from "./views/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about",
    loadChildren: () => import('./views/about/about.module').then(m => m.AboutModule)
  },
  {
    path: "credentials",
    loadChildren: () => import('./views/credentials/credentials.module').then(m => m.CredentialsModule)
  },  
  {
    path: "operations",
    loadChildren: () => import('./views/operations/operations.module').then(m => m.OperationsModule)
  },
  {
    path: "404",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "/404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
