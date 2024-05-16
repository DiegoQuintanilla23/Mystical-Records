import { Component } from '@angular/core';
import { OrdersTableComponent } from '../../../components/admin/orders-table/orders-table.component';

@Component({
  selector: 'app-view-orders',
  standalone: true,
  imports: [OrdersTableComponent],
  templateUrl: './view-orders.page.html',
  styleUrl: './view-orders.page.css'
})
export class ViewOrdersPage {

}
