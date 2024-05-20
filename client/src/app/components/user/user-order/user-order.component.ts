import { Component, Input } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { Order } from '../../../interfaces/order.interface';
import { NgIf } from '@angular/common';
import { Album } from '../../../interfaces/album.interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-order',
  standalone: true,
  imports: [CardComponent, NgIf],
  templateUrl: './user-order.component.html',
  styleUrl: './user-order.component.css'
})
export class UserOrderComponent {
  @Input() public item:Order = {
    _id:'',
    iduser: '',
    idalbum: '',
    createdAt: new Date(),
    arrivalDate: new Date(),
    amount: 0,
  }
  public Album:Album ={
    _id:'',
    idclassification:'',
    name:'',
    artist:'',
    genre:'',
    description:'',
    quantity:0,
    format:'',
    price:0,
    releaseYear:0,
    addedDate:new Date(),
    image:'',
    discount:0
  }
  public order:Order = {
    iduser: '',
    idalbum: '',
    amount: 0
  }

  constructor(private http: HttpClient, public UserService : UserService, private router: Router) {}

  ngOnInit() {
    this.executeFetch();
  }

  private executeFetch(): void {
    this.http.get("http://localhost:8080/api/albums/" + this.item.idalbum).subscribe({
      next: (response: any) => {
        //console.log(response);
        this.Album = response.result;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  public DeleteItem(): void {
    const token = localStorage.getItem("AuthToken") ?? "";
    const userId = this.UserService.ActiveUser._id;
    if(token==""||userId=="")
    {
      return;
    }
    if (!userId) {
      //console.error('Active user ID is missing');
      this.router.navigate(['/login']);
      return;
    }
    this.http.delete("http://localhost:8080/api/orders/"+this.item._id,{
      headers:{
        "Authorization": token,
      }
      })
      .subscribe({
        next: (response: any) => {
          window.location.reload();
        },
        error: (error: any) => {
          console.error('', error);
        }
      });
  }

}
