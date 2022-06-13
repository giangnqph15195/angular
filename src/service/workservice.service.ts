import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iworks } from 'src/app/model/works';

@Injectable({
  providedIn: 'root'
})
export class WorkserviceService {
  url : string ="http://localhost:3001/works"
  constructor(private http : HttpClient) { }
  getworks(){
    return this.http.get(`${this.url}`)
  }
  getwork(id: number): Observable<Iworks>{
    return this.http.get<Iworks>(`${this.url}/${id}`)
  }
}
