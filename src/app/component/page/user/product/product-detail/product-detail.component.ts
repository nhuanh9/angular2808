import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ProductService} from "../../../../../service/product.service";
import {Product} from "../../../../../model/product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  // @ts-ignore
  product: Product;

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService) {
  }

  ngOnInit(): void {
    this.product = {
      name: '',
      category: 1,
      description: '',
      price: ''
    }
    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      const id = paraMap.get('id');
      this.getProduct(id);
    });
  }

  getProduct(id: any) {
    this.productService.getById(id).subscribe(yy => {
      this.product = yy;
    })
  }
}
