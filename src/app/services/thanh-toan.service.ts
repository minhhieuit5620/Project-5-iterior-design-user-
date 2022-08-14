import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Orders } from '../model/hoaDon/order.model';
import { orderDetail } from '../model/hoaDon/orderDetail.model';
import { Shipping } from '../model/hoaDon/shippingmodel';


@Injectable({
  providedIn: 'root'
})

export class ThanhToanService {
  private baseURL="http://localhost:65426/api/Orders";
  private urlDetail="http://localhost:65426/api/OrderDetails";
  constructor(private http:HttpClient) { 

  }
  hoadon:Orders[];
  ctHoaDon:orderDetail[]=[];
  detail:any[] = [];
  themHoaDon(order:any){
   return this.http.post<Orders>(this.baseURL,order);    
  }
  themDetail(detail:any[]){
    return this.http.post<orderDetail>(this.baseURL,detail);
  }
  themShip(ship:any){
    return this.http.post<Shipping>(this.baseURL,ship);
  }
  // themCTHD(orderDetail:orderDetail,id:number):Observable<orderDetail[]>{
  //   return this.http.post<orderDetail[]>(this.baseURL+`/${id}`,orderDetail);    
  // }
}
