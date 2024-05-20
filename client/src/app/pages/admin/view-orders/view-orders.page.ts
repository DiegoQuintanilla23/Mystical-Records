import { Component } from '@angular/core';
import { OrdersTableComponent } from '../../../components/admin/orders-table/orders-table.component';
import { Order } from '../../../interfaces/order.interface';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-view-orders',
  standalone: true,
  imports: [OrdersTableComponent],
  templateUrl: './view-orders.page.html',
  styleUrl: './view-orders.page.css'
})
export class ViewOrdersPage {
  public orders:Order[] = [];

  constructor( private http: HttpClient, public UserService : UserService){}

  ngOnInit() {
    this.executeFetch();
  }

  private executeFetch(): void {
    const token = localStorage.getItem("AuthToken") ?? "";
    const userId = this.UserService.ActiveUser._id;
    if(token==""||userId==""||this.UserService.ActiveUser.role!="admin")
    {
      return;
    }
    this.http.get("http://localhost:8080/api/orders",{
      headers:{
        "Authorization": token,
      }
      }).subscribe(
      {
        next:(response:any)=>{
          this.orders=response.result;
          //console.log(this.orders);
        },
        error:(error:any)=>{
          console.log(error);
        }
      }
    )
  }

}
