import { Products } from "./products/products.model";

export class Cart {
    id:number;
    productId:number;
    productName?:string;
    qty?:number;
    price?:number;
    des:string;
    constructor(id:number,product:Products, qty=1){
        this.id=id;
        this.productId=product.Id;
        this.productName=product.Name;
        this.price=product.Price;
        this.des=product.Description;
        this.qty=qty;
     
    }
}
