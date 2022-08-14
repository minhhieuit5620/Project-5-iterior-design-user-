import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products/products.model';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // public sessionStorage = sessionStorage;
  data = sessionStorage.getItem('key');
  items: any;
  total: number;
  
  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    
    this.cartService.item.subscribe((res) => {
      this.items = res;
      this.total = 0;
      for (let x of this.items) {
        x.money = x.quantity * x.price;
        this.total += x.quantity * x.price;
      }
    });
    console.log(this.items)

    //this.addQty(i);
  }
  addQty(item: any, quantity: number) {
    item.Quantity = quantity;
    item.money = Number.parseInt(item.Quantity) * item.Price;
    this.cartService.addQty(item);
  }
  deleteItem(id: any) {
    this.cartService.deleteItem(id);
  }
  clearCart() {
    this.cartService.clearCart();
    alert('Bạn muốn xóa sản phẩm này ra khỏi giỏ hàng');
  }
  // removeItem(id:any) {
  //   this.cartService.deleteItem(id);
  //   this.items = this.cartService.getItems();
  // }
}
