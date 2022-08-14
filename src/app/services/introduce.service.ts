import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { introduce } from '../model/introduce/introduce.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntroduceService {
 
  baseURL="http://localhost:65426/api/introduces";
  constructor(private http:HttpClient) { }

  getIntroduces():Observable<introduce[]>{
    return this.http.get<introduce[]>(this.baseURL);
  }
  // getall():Observable<news[]>{
  //   return this.http.get<news[]>(this.baseURL);
  // }
}
