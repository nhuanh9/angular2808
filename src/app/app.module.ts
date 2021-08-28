import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './component/page/login/login.component';
import {RegisterComponent} from './component/page/register/register.component';
import {HomeComponent} from './component/page/user/home/home.component';
import {ShareModule} from "./module/share/share.module";
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  exports: [NgxPaginationModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
