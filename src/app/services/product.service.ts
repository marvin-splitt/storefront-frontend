import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = '/api/products';

  constructor(private http: HttpClient) { }

  getProducts = (): Observable<Product[]> => {
    return this.http.get(this.baseUrl) as Observable<Product[]>;
  }

  getProduct = (id: number): Observable<Product | null> => {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Product | null>;
  }

  searchProducts = (term: string): Observable<Product[]> => {
    return this.http.get(`${this.baseUrl}?name=${term}`) as Observable<Product[]>;
  }
}
