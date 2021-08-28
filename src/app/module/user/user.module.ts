import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListProductComponent} from "../../component/page/user/product/list-product/list-product.component";
import {AppModule} from "../../app.module";
import {ProductDetailComponent} from "../../component/page/user/product/product-detail/product-detail.component";
import {RouterModule, Routes} from "@angular/router";
import {ShareModule} from "../share/share.module";
import {FormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";


const routes: Routes = [
  {
    path: '',
    component: ListProductComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  }
];

@NgModule({
  declarations: [
    ListProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule,
    NgxPaginationModule
  ]
})
export class UserModule {
}
