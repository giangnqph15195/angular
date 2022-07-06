import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iprofile } from 'src/app/model/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url : string = "http://localhost:3001/profile"
  constructor(private http : HttpClient) { }
  getprodile(){
   return this.http.get(`${this.url}`)
  }
  getone(id:number){
    return this.http.get(`${this.url}/${id}`)
  }
  edit(profile : Iprofile){
    return this.http.put(`${this.url}`,profile)
  }
}
