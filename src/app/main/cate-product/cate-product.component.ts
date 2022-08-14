import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category_product, Products } from 'src/app/model/products/products.model';
import { ProductService } from 'src/app/services/product.service';
import { Location } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cate-product',
  templateUrl: './cate-product.component.html',
  styleUrls: ['./cate-product.component.css']
})
export class CateProductComponent implements OnInit {

  datas: Products[] = [];
  cate:Category_product[]=[];
  public keyword:string;
  constructor(
    private serviceCate: ProductService,
    private location: Location,
    private route: ActivatedRoute,
    private cartService:CartService
  ) { }

  ngOnInit(): void {

    this.getCateProduct();
    this.getAllCate();
  }
  getCateProduct() {

    const firstParam = (+this.route.snapshot.params["Id"]);
    // const secondParam = (+this.route.snapshot.params["IdCategory"]);
    console.log("a" + firstParam + " b:" + firstParam);
    this.serviceCate.getCatID(firstParam).subscribe((res: any) => {
      // debugger;
      this.datas = res;

    })
  }
  getAllCate(){
    this.serviceCate.getAllCate().subscribe((data)=>{
      this.cate=data;
    })
  }
  Search(){
    if(this.keyword==""){
      this.getCateProduct();
    }
    else{
      this.serviceCate.Search(this.keyword).subscribe((data)=>{
        this.datas=data;
        console.log(data);
      },error=>{
        console.log(error);
      })
    }
   

  } 
  addToCart(product:Products){
    this.cartService.addCart(product);
  }

}
