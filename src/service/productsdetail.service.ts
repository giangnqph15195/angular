import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iblogdeatail } from 'src/app/model/blogdetail';

@Injectable({
  providedIn: 'root',
})
export class ProductsdetailService {
  url: string =
    'https://json-server-2esig0om8-giangnqph15195.vercel.app/productdetail';
  constructor(private http: HttpClient) {}

  getone(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }
  add(blog: any) {
    return this.http.post(`${this.url}`, blog);
  }
  update(blog: Iblogdeatail) {
    return this.http.put(`${this.url}/${blog.id}`, blog);
  }
  remove(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
