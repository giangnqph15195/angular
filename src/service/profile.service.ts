import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iprofile } from 'src/app/model/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  url: string =
    'https://json-server-2esig0om8-giangnqph15195.vercel.app/profile';
  constructor(private http: HttpClient) {}
  getprodile() {
    return this.http.get(`${this.url}`);
  }
  getone(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }
  edit(profile: Iprofile) {
    return this.http.put(`${this.url}`, profile);
  }
}
