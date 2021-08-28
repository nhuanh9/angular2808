import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./component/page/login/login.component";
import {RegisterComponent} from "./component/page/register/register.component";
import {HomeComponent} from "./component/page/user/home/home.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'user',
    component: HomeComponent,
    loadChildren: () => import ('./module/user/user.module').then(module => module.UserModule)
  },  {
    path: 'admin',
    // component: HomeComponent,
    loadChildren: () => import ('./module/admin/admin.module').then(module => module.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
