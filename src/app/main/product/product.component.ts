import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category_product, Products } from 'src/app/model/products/products.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
// import{ToastrSer}
// import {ToastrService} from 'ngx-toastr';
//const baseURL="http://localhost:65426/api/Products";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  pageSize: 1;
  p:number=1;
  filterTerm:string;

  pro:Products = { id: 0, name: '', image: '', description: '' ,quantity:0,price:0,idCategory:0};
  datas:Products[]=[];
  product:Products;
  cate:Category_product[]=[];
  newPro:Products[] = [];
  public keyword:string;
  constructor(
    private proService: ProductService,
    private cartService:CartService,
    private toastr:ToastrService,
    ) { }

  ngOnInit(): void {
    this.GetPro().then(data => {
      this.datas=data
    });
    this.getAllCate();
    this.getNewPro();
  }

  GetPro(){
    // return this.httpClient.get<Product[]>(baseURL + '/Getproducts').toPromise().then(res => <Product[]>res).then(data => {return data;});
    return this.proService.getall().toPromise().then(res => <Products[]>res).then(data => {return data;})
    // this.proService.getall().subscribe((res:any)=>{
    //   this.datas=res;
    // })
  }
 
  addToCart(product:Products){
    this.cartService.addCart(product);
    this.toastr.success('1 sản phẩm vào giỏ hàng');
    // this.toastr.success('Hello world!', 'Toastr fun!');
    console.log("aaa");
    
  }

  getAllCate(){
    this.proService.getAllCate().subscribe((data)=>{
      this.cate=data;
    })
  }
  getNewPro(){
    this.proService.getNewPr().subscribe((any)=>{
    this.newPro=any;
    })
  }
  Search(){
    if(this.keyword==""){
      this.GetPro();
    }
    else{
      this.proService.Search(this.keyword).subscribe((data)=>{
        this.datas=data;
        console.log(data);
      },error=>{
        console.log(error);
      })
    }
   

  }

}
