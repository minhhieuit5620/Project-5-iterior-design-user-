import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CateProject } from '../model/projects/cate-project.model';
import { Process, Projects } from '../model/projects/projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  project:Projects[];
  private baseURl="http://localhost:65426/api/projects";
  private urlCate="http://localhost:65426/api/CategoryProjects";
  private urlProcess="http://localhost:65426/api/Processes";

  constructor( private http:HttpClient) { }

  getAllProject():Observable<Projects[]>{
    return this.http.get<Projects[]>(this.baseURl);
  }
  getAllCateProject():Observable<CateProject[]>{
    return this.http.get<CateProject[]>(this.urlCate);
  }
  getAllProcess():Observable<Process[]>{
    return this.http.get<Process[]>(this.urlProcess);
  }
  getProjectId(id:number):Observable<Projects>{
    const url=`${this.baseURl}/${id}`;//baseURL+id;
    
    return this.http.get<Projects>(url);
  }
  getCatID(idCate:number):Observable<CateProject>{
    const url=`${this.urlCate}/${idCate}`;
    return this.http.get<CateProject>(url);
    // .pipe(
    //   tap(a=>console.log(`a=${JSON.stringify(a)}`)));
    // .pipe(
    //   tap(selectedMovie => console.log(`selected movie = ${JSON.stringify(selectedMovie)}`)),
    //   catchError(error => of(new pro()))
    // );;
 }
}
