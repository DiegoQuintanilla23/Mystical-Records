import { Component } from '@angular/core';
import { UserOrderComponent } from '../../../components/user/user-order/user-order.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [UserOrderComponent],
  templateUrl: './orders.page.html',
  styleUrl: './orders.page.css'
})
export class OrdersPage {

}
