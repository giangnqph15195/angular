import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import moskdata from 'src/data.';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  url = 'http://localhost:3001/products'
  constructor(private http : HttpClient) { }
  getProducts(){
    return this.http.get(this.url)
  }
  getProduct(id: number){
    return moskdata.find(item => item.id == +id)
  }
  addproduct(product: any){
    return moskdata.push(product)
  }
}
