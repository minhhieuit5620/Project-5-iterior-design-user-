import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { lienHe } from '../model/lienHe/lienHe.model';
@Injectable({
  providedIn: 'root'
})
export class LienHeService {
baseURL="http://localhost:65426/api/LienHes";
  constructor(private http: HttpClient) {

   }
   addLienHe(data:any):Observable<any>{
     return this.http.post<any>(this.baseURL,data) 
   }
  
}
