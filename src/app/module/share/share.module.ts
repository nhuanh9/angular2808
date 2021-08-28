import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from "../../component/block/menu/menu.component";
import {CarouselComponent} from "../../component/block/carousel/carousel.component";


@NgModule({
  declarations: [
    MenuComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    CarouselComponent,
  ]
})
export class ShareModule {
}
