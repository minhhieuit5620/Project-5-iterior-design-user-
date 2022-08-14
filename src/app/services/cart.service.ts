import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { observable } from 'rxjs';
import { Products } from '../model/products/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private itemsSubject = new BehaviorSubject<any[]>([]);
  item = this.itemsSubject.asObservable();
  constructor() {
    let local_storage = JSON.parse(localStorage.getItem('cart')|| '{}');
    if (!local_storage) {
      local_storage = [];
    }
    this.itemsSubject.next(local_storage);
  }

  addCart(product:Products) {
    product.quantity = 1;
    let local_storage:any;
    if (localStorage.getItem('cart') == null) {
      local_storage = [product];
    } else {
      local_storage = JSON.parse(localStorage.getItem('cart')|| '{}');
      let ok = true;
      for (let x of local_storage) {
        if (x.id == product.id) {
          x.quantity ++;
          ok = false;
          break;
        }
      }
      if(ok){
        local_storage.push(product);
      }
    }
    localStorage.setItem('cart', JSON.stringify(local_storage));
    this.itemsSubject.next(local_storage);

  }
  getItems() {
    if (localStorage.getItem('cart') == null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem('cart')|| '{}');
    }
  }
  deleteItem(id:number) {
    let local_storage = this.getItems().filter((x:any) => x.id != id);
    localStorage.setItem('cart', JSON.stringify(local_storage));
    this.itemsSubject.next(local_storage);
  }

 

  addQty(product:Products) {
    let local_storage = JSON.parse(localStorage.getItem('cart')|| '{}');
    for (let x of local_storage) {
      if (x.id == product.id) {
        x.quantity = product.quantity;
        break;
      }
    }
    localStorage.setItem('cart', JSON.stringify(local_storage));
    this.itemsSubject.next(local_storage);
  }

  numberOfItems() {
    let local_storage = JSON.parse(localStorage.getItem('cart')|| '{}');
    return local_storage.length;
  }

  clearCart() {
   localStorage.clear();
   this.itemsSubject.next([]);
  }

  // public items:any=[];
  // public productList=new BehaviorSubject<any>([]);

  

  // getProduct(){
    
  //   return this.productList.asObservable();
    
  // }
  // setProduct(product:any){
  //   this.items.push(...product);
  //   this.productList.next(product);
  // }
  
  // addToCart(product:any){
  //   this.items.push(product);
  //   this.productList.next(this.items);
  //   this.getTotalPrice();
  //   localStorage.setItem('cartProducts', JSON.stringify(this.items));
  //   console.log("Session data: ", localStorage.getItem('cartProducts')?? []);
   
  // }
  // getTotalPrice() :number{
  //   let grandTotal=0;
  //   this.items.map((a:any)=>{
  //     grandTotal+=a.total
  //   })
  //   return grandTotal;
  // }
  // removeItem(product:any){
  //   this.items.map((a:any,index:any)=>{
  //     if(product.id===a.id){
  //       this.items.splice(index,1);
  //     }
  //   })  
  // }
  // removeAllCart(){
  //   this.items=[];
  //   this.productList.next(this.items);
  // }




  // addToCart(product: Products) {
  //   this.items.push(product);
  //   console.log(this.items);
  // }

  // getItems() {
  //   return this.items;
  // }

  // clearCart() {
  //   this.items = [];
  //   return this.items;
  // }
}