import { Component } from '@angular/core';
import { WishlistItemComponent } from '../../../components/user/wishlist-item/wishlist-item.component';
import { AlbumWishlist } from '../../../interfaces/albumwhislist.interface';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../services/user.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [WishlistItemComponent, NgFor],
  templateUrl: './wishlist.page.html',
  styleUrl: './wishlist.page.css'
})
export class WishlistPage {
  public wishlist:AlbumWishlist[]=[];
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
    this.http.get("http://localhost:8080/api/albumWhLists/user/"+userId,{
      headers:{
        "Authorization": token,
      }
      }).subscribe(
      {
        next:(response:any)=>{
          this.wishlist=response.result;
        },
        error:(error:any)=>{
          console.log(error);
        }
      }
    )
  }

}
