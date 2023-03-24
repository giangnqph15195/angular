import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import moskdata from 'src/data.';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/model/Products';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  url: string =
    'https://json-server-2esig0om8-giangnqph15195.vercel.app/products';

  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get(this.url);
  }
  getlimit() {
    return this.http.get(`${this.url}??_start=20&_limit=2`);
  }
  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.url}/${id}`);
  }
  addproduct(product: any) {
    return this.http.post(`${this.url}`, product);
  }
  removeProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.url}/${id}`);
  }
  updateProduct(product: IProduct) {
    return this.http.put(`${this.url}/${product.id}`, product);
  }
  getdetailproduct(id: number) {
    return this.http.get(`${this.url}/${id}?_embed=productdetail`);
  }
}
