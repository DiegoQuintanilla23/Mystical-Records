import { Component, Input } from '@angular/core';
import { Order } from '../../../interfaces/order.interface';
import { Album } from '../../../interfaces/album.interface';
import { User } from '../../../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-order-row',
  standalone: true,
  imports: [],
  templateUrl: './order-row.component.html',
  styleUrl: './order-row.component.css'
})
export class OrderRowComponent {
  @Input() public item:Order = {
    _id:'',
    iduser: '',
    idalbum: '',
    createdAt: new Date(),
    arrivalDate: new Date(),
    amount: 0,
  };
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
  };
  public User: User = {
    _id: '',
    name: '',
    email: '',
    password: '',
    role: 'user',
    address: '',
  };

  constructor(private http: HttpClient, public UserService : UserService, private router: Router) {}

  ngOnInit() {
    this.executeFetch();
  }

  private executeFetch(): void {
    this.http.get("http://localhost:8080/api/albums/" + this.item.idalbum).subscribe({
      next: (response: any) => {
        //console.log(response);
        this.Album = response.result;
        console.log(this.Album);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
    const token = localStorage.getItem("AuthToken") ?? "";
    const userId = this.UserService.ActiveUser._id;
    if(token==""||userId==""||this.UserService.ActiveUser.role!="admin")
    {
      return;
    }
    this.http.get("http://localhost:8080/api/users/oneUser/" + this.item.iduser, {
      headers: {
        "Authorization": token,
      }
    }).subscribe({
      next: (response: any) => {
        //console.log(response);
        this.User = response.user; // Cambiado de response.result a response.user
        console.log(this.User);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
  

}
