import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iworks } from 'src/app/model/works';

@Injectable({
  providedIn: 'root',
})
export class WorkserviceService {
  url: string = 'https://json-server-2esig0om8-giangnqph15195.vercel.app/works';
  constructor(private http: HttpClient) {}
  getworks() {
    return this.http.get(`${this.url}works`);
  }
  getwork(id: number): Observable<Iworks> {
    return this.http.get<Iworks>(`${this.url}works/${id}`);
  }
  getcategory() {
    return this.http.get(`${this.url}categories`);
  }
  editwork(works: Iworks) {
    return this.http.put(`${this.url}works/${works.id}`, works);
  }
  category(id: number) {
    return this.http.get(`${this.url}categories/${id}?_embed=works`);
  }
  removework(id: number) {
    return this.http.delete(`${this.url}works/${id}`);
  }
  addwork(works: Iworks) {
    return this.http.post(`${this.url}works`, works);
  }
}
