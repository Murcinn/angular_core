import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthCallbackComponent } from "./auth-callback/auth-callback.component";
import { HomeComponent } from "./main/home/home.component";
import { PageNotFoundComponent } from "./main/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "auth-callback",
    component: AuthCallbackComponent
  },
  {
    path: "not-found",
    component: PageNotFoundComponent
  },
  {
    path: "**",
    redirectTo: "not-found",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
