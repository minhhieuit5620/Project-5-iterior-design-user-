import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Category_product, Products } from '../model/products/products.model';
import { Observable, of } from 'rxjs';

//import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL="http://localhost:65426/api/Products/";
  
  private URL="http://localhost:65426/api/Products/SearchByName";
  private urlCate="http://localhost:65426/api/CategoryProducts";
  product:Products;
  category:Category_product
  constructor(private http:HttpClient) { }

  getall():Observable<Products[]>{
    return this.http.get<Products[]>(this.baseURL);
  }
  getProId(id:number):Observable<Products>{
    const url=`${this.baseURL}${id}`;//baseURL+id;
    
    return this.http.get<Products>(url);
  }
 getCatID(idCate:number):Observable<Products[]>{
    const url=`${this.baseURL}GetCateId/${idCate}`;
    return this.http.get<Products[]>(url).pipe(
      tap(a=>console.log(`a=${JSON.stringify(a)}`)));
    // .pipe(
    //   tap(selectedMovie => console.log(`selected movie = ${JSON.stringify(selectedMovie)}`)),
    //   catchError(error => of(new pro()))
    // );;
 }
  getAllCate():Observable<Category_product[]>{
    return this.http.get<Category_product[]>(this.urlCate);
  }
  getNewPr():Observable<Products[]>{
    return this.http.get<Products[]>(`${this.baseURL}GetProductNew`);
  }
 Search(searchString:string):Observable<Products[]>{
  if(!searchString.trim()){
    return of([]);
  }
  // const url=`${this.URL}${name}`;
  // console.log(url);
  debugger;
  return this.http.get<Products[]>(`${this.URL}/${searchString}`);
}
}

// return this.httpClient.get<Product[]>(baseURL + '/Getproducts').toPromise().then(res => <Product[]>res).then(data => {return data;});