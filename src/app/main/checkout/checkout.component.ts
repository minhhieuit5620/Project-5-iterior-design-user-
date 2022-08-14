import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ThanhToanService } from 'src/app/services/thanh-toan.service';
import { Orders } from 'src/app/model/hoaDon/order.model';
import { orderDetail } from 'src/app/model/hoaDon/orderDetail.model';
import { FormControl, Validators } from '@angular/forms';
import { Shipping } from 'src/app/model/hoaDon/shippingmodel';
import { hoadonDTO} from 'src/app/model/hoaDon/hoadonDTO.model';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  [x: string]: any;
  itemInCart:number;
  items: any;
  total: number;
 day="20-11-2021";


  //thanh Thanh
   datHang:Orders = { idOrder: 0, idCustomer: 1, nameCus: 'Hiếu' ,status:0 ,dayOrder:  new Date(),note:'' };
   ctHD:orderDetail={idOrderDetail:1,idOrder:0,idProduct:0,nameProduct:'',quantity:0,price:0,sumMoney:0,note:''};
   ship:Shipping={shipId:1,customerName:'',customerEmail:'',customerPhone:'',note:'',payments:'Thanh toán bằng thẻ',nameOnCard:'',cardNumber:0,issueDate:new Date(),idOrder:0,address:""};
   hddto :hoadonDTO={ hoaDon:{ idOrder: 1, idCustomer: 1, nameCus: 'Hiếu' ,status:0 ,dayOrder:  new Date(),note:'' },
   chiTietHDs:[],
Ship:{shipId:1,customerName:'',customerEmail:'',customerPhone:'',note:'',payments:'',nameOnCard:'',cardNumber:0,issueDate:new Date(),idOrder:0,address:""}
  };
   
   order:Orders[];
  cthds1:any=[];
  giohangs:Array<any>;
  // hdbans:Array<any>;
  constructor(private cartService:CartService
    ,private ThanhToan:ThanhToanService 
    , private toastr:ToastrService
    ,private router: Router
    ) { }

  ngOnInit(): void {

  this.cartService.item.subscribe((res)=>{
    this.itemInCart=res.length;
  })

  this.cartService.item.subscribe((res) => {
    this.items = res;
    this.total = 0;
    for (let x of this.items) {
      x.money = x.quantity * x.price;
      this.total += x.quantity * x.price;
    }
  });
  }

  
  thanhToan(){
    this.giohangs=JSON.parse(localStorage.getItem("cart")|| '{}');
   

   // var cthds1:any=[];
   
         for(let i=0;i<this.giohangs.length;i++){

          var cthdban1:any={};
          //  cthdban1.idOrderDetail=1+i;
            cthdban1.idOrder=this.datHang.idOrder;
           cthdban1.idProduct=this.giohangs[i].id;
           cthdban1.nameProduct=this.giohangs[i].name;
           cthdban1.quantity=this.giohangs[i].quantity;
           cthdban1.price=this.giohangs[i].price;
           cthdban1.sumMoney=this.giohangs[i].quantity*this.giohangs[i].price;
           cthdban1.note="";
           this.cthds1.push(cthdban1); 
           console.log(cthdban1);        
         }
         this.hddto.hoaDon =this.datHang;
         console.log(this.datHang);
         this.hddto.chiTietHDs =  this.cthds1;
         this.hddto.Ship = this.ship;
         this.ThanhToan
         .themHoaDon(this.hddto).subscribe(
           data => {
            this.toastr.success('Bạn đã đặt hàng thành công');
            this.router.navigate(['/cart']);           
            this.cartService.clearCart();
            this.itemsSubject.next([]);
          
           
            console.log('hóa đơn'+data);
           },error=>{
             console.log('erro',error);
           }
         )
    
  }
}
