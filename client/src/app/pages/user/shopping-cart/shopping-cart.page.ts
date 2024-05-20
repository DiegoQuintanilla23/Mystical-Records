import { Component } from '@angular/core';
import { ShoppingCartItemComponent } from '../../../components/user/shopping-cart-item/shopping-cart-item.component';
import { NgFor } from '@angular/common';
import { AlbumShoppingCart } from '../../../interfaces/albumshoppingcart.interface';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [ShoppingCartItemComponent, NgFor],
  templateUrl: './shopping-cart.page.html',
  styleUrl: './shopping-cart.page.css'
})
export class ShoppingCartPage {
  public shoppingcartlist:AlbumShoppingCart[]=[];
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
    this.http.get("http://localhost:8080/api/albumShCarts/user/"+userId,{
      headers:{
        "Authorization": token,
      }
      }).subscribe(
      {
        next:(response:any)=>{
          this.shoppingcartlist=response.result;
        },
        error:(error:any)=>{
          console.log(error);
        }
      }
    )
  }

}
