import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  itemInCart:number;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {

  this.cartService.item.subscribe((res)=>{
    this.itemInCart=res.length;
  })
  }

}
