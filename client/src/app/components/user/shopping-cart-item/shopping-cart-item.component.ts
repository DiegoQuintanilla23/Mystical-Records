import { Component, Input } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { NgIf } from '@angular/common';
import { AlbumShoppingCart } from '../../../interfaces/albumshoppingcart.interface';
import { Album } from '../../../interfaces/album.interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { Order } from '../../../interfaces/order.interface';

@Component({
  selector: 'app-shopping-cart-item',
  standalone: true,
  imports: [CardComponent, NgIf],
  templateUrl: './shopping-cart-item.component.html',
  styleUrl: './shopping-cart-item.component.css'
})
export class ShoppingCartItemComponent {
  @Input() public item:AlbumShoppingCart = {
    _id:'',
    iduser:'',
    idalbum:''
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
  public DiscPrice:number = 0;
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
        console.log(response);
        this.Album = response.result;
        this.CalcDiscount();
        //console.log(this.Album);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  public AddToOrders(): void {
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
    this.order.idalbum = this.item.idalbum;
    this.order.iduser = userId;
    this.order.amount = this.DiscPrice;
    this.http.post("http://localhost:8080/api/orders", this.order,{
      headers:{
        "Authorization": token,
      }
      })
      .subscribe({
        next: (response: any) => {
          this.DeleteItem();
          window.location.reload();
          
        },
        error: (error: any) => {
          console.error('', error);
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
    this.http.delete("http://localhost:8080/api/albumShCarts/"+this.item._id,{
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

  private CalcDiscount():void {
    if(this.Album.discount==0)
      {
        this.DiscPrice = this.Album.price;
      }else{
        this.DiscPrice = this.Album.price - (this.Album.discount*this.Album.price);
        //console.log(this.DiscPrice);
      }
  }
}
