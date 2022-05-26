import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
// import moskdata from 'src/data.';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  url: string = 'http://localhost:3001/products'

  constructor(private http : HttpClient) { }
  getProducts(){
    return this.http.get(this.url)
  }
  getProduct(id: number): Observable<{id:number, name: string, price: number, status: boolean}>{
    return this.http.get<{id:number, name: string, price: number, status: boolean}>(`${this.url}/${id}`)
  }
  addproduct(product: any){
    return this.http.post(`${this.url}`, product)
  }
  removeProduct(id : number): Observable<{id:number, name: string, price: number, status: boolean}>{
    return this.http.delete<{id:number, name: string, price: number, status: boolean}>(`${this.url}/${id}`)
  }
  updateProduct(product: {id?:number, name: string, price: number, status: boolean}){
    return this.http.put(`${this.url}/${product.id}`, product)
  }
}
