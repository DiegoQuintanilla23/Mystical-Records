import { Component } from '@angular/core';
import { UserOrderComponent } from '../../../components/user/user-order/user-order.component';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Order } from '../../../interfaces/order.interface';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [UserOrderComponent, NgFor],
  templateUrl: './orders.page.html',
  styleUrl: './orders.page.css'
})
export class OrdersPage {
  public orderlist:Order[]=[];
  constructor( private http: HttpClient, public UserService : UserService){}

  ngOnInit() {
    this.executeFetch();
  }

  private executeFetch(): void {
    const token = localStorage.getItem("AuthToken") ?? "";
    const userId = this.UserService.ActiveUser._id;
    if(token==""||userId=="")
    {
      return;
    }
    this.http.get("http://localhost:8080/api/orders/user/"+userId,{
      headers:{
        "Authorization": token,
      }
      }).subscribe(
      {
        next:(response:any)=>{
          this.orderlist=response.result;
          //console.log(this.orderlist);
        },
        error:(error:any)=>{
          console.log(error);
        }
      }
    )
  }
}
