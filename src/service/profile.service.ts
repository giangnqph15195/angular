import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url : string = "http://localhost:3001/profile"
  constructor(private http : HttpClient) { }
  getprodile(){
   return this.http.get(`${this.url}`)
  }
}
