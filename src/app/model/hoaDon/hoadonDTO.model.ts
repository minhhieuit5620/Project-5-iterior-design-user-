import { Orders } from './order.model';
import { orderDetail } from './orderDetail.model';
import { Shipping } from './shippingmodel';
export class hoadonDTO {
    hoaDon:Orders ; 
 chiTietHDs :orderDetail[] ;
 Ship :Shipping;
}