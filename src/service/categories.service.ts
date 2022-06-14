import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icategory } from 'src/app/model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url : string = "http://localhost:3001/categories"
  constructor(private http : HttpClient) { }
  addcategories(categories: Icategory){
    return this.http.post(`${this.url}`,categories)
  }
  updatecategory(categories : Icategory){
    return this.http.put(`${this.url}/${categories.id}`,categories)
  }
  deletecate(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }
  getcategory(id:number){
    return this.http.get(`${this.url}/${id}`)
  }
}
