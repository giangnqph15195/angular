import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iblogdeatail } from 'src/app/model/blogdetail';

@Injectable({
  providedIn: 'root'
})
export class ProductsdetailService {
  url :string = "http://localhost:3001/productdetail"
  constructor(private http: HttpClient) { }

  getone(id:number){
    return this.http.get(`${this.url}/${id}`)
  }
  add(blog:any){
  return  this.http.post(`${this.url}`,blog)
  }
  update(blog:Iblogdeatail){
  return  this.http.put(`${this.url}/${blog.id}`,blog)
  }
  remove(id:number){
  return  this.http.delete(`${this.url}/${id}`)
  }
}
