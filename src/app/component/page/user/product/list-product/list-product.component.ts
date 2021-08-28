import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../../../service/category.service";
import {ProductService} from "../../../../../service/product.service";
import {Product} from "../../../../../model/product";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  // @ts-ignore
  products: Product[];
  page = 1;
  count = 0;
  tableSize = 8;
  tableSizesArr = [4, 8, 12];
  currentIndex = 1;

  constructor(private categoryService: CategoryService,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllCate() {
    this.categoryService.getAll().subscribe(xxx => {
      console.log(xxx);
    })
  }

  getAllProduct() {
    this.productService.getAll().subscribe(xxx => {
      this.products = xxx;
    })
  }

  tabSize(event: any) {
    this.page = event;
    this.getAllProduct();
  }

  tableData(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllProduct();
  }
}
