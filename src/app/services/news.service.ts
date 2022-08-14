import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { news } from '../model/news/news.model';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
baseURL="http://localhost:65426/api/news";
  constructor(private http: HttpClient) {

   }
   addLienHe(data:any):Observable<any>{
     return this.http.post<any>(this.baseURL,data) 
   }
   getall():Observable<news[]>{
     return this.http.get<news[]>(this.baseURL);
   }
   get3News():Observable<news[]>{
     var url=this.baseURL+"/Get3News";
     return this.http.get<news[]>(url);
   }
   getNewsId(id:number):Observable<news>{
    const url=`${this.baseURL}/${id}`;//baseURL+id;
    
    return this.http.get<news>(url);
  }
}
