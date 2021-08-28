import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";
import {environment} from "../../environments/environment";

const API_URL = environment.apiUrl + 'products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL + '/list');
  }

  getById(id: any): Observable<Product> {
    return this.httpClient.get<Product>(API_URL + `/${id}`);
  }
}
