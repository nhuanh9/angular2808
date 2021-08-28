import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Category} from "../model/category";

const API_URL = environment.apiUrl + 'categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Category> {
    return this.httpClient.get(API_URL+'/list');
  }
}
