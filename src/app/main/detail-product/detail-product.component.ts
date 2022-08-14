import { Component, OnInit, Input } from '@angular/core';
//Router
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Products } from 'src/app/model/products/products.model';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

import { takeUntil } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  isShow=false;

  @Input() product: Products;
  datas:Products[]=[];
  //private product: Products;
  constructor(
    private route: ActivatedRoute,
    private proService: ProductService,
    private cartService:CartService,
    private location: Location
    
  ) { }

  ngOnInit(): void {
   
   this.getIdPro();
  
   this.refserProCategory1();
  
  }

  
  getIdPro():void{
  const id=(+this.route.snapshot.params["id"]);
  //const cate=(+this.route.snapshot.params["cateId"]);
  console.log(`this.route.snapshot.paramMapId = ${JSON.stringify(this.route.snapshot.params)}`);
  this.proService.getProId(id).subscribe(product => this.product = product);  
  //console.log(cate);
  //window.location.reload();
  
  }


  refserProCategory1()
  {

    const firstParam = (+this.route.snapshot.params["id"]);
    const secondParam = (+this.route.snapshot.params["IdCategory"]);
    console.log("a"+firstParam+" b:"+secondParam);
    this.proService.getCatID(secondParam).subscribe((res:any)=>{
      this.datas=res;
     
    })
  }
  addToCart(product:Products){
    this.cartService.addCart(product);
  }
  
  
}
