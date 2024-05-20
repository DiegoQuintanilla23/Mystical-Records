import { Component, Input } from '@angular/core';
import { Order } from '../../../interfaces/order.interface';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../services/user.service';
import { NgFor } from '@angular/common';
import { OrderRowComponent } from '../order-row/order-row.component';

@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [NgFor, OrderRowComponent],
  templateUrl: './orders-table.component.html',
  styleUrl: './orders-table.component.css'
})
export class OrdersTableComponent {
  @Input() public OdList:Order[] = [];

  constructor( private http: HttpClient, public UserService : UserService){}

}
