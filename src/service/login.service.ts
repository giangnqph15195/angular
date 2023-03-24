import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iuser } from 'src/app/model/Users';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url: string = 'https://json-server-2esig0om8-giangnqph15195.vercel.app/';
  constructor(private http: HttpClient) {}
  creatUser(users: Iuser) {
    return this.http.post(`${this.url}users`, users);
  }
  signin(user: Iuser) {
    return this.http.post(`${this.url}login`, user);
  }
}
