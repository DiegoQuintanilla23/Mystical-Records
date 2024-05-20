import { Component, Input } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { AlbumWishlist } from '../../../interfaces/albumwhislist.interface';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../services/user.service';
import { Album } from '../../../interfaces/album.interface';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-wishlist-item',
  standalone: true,
  imports: [CardComponent,NgIf],
  templateUrl: './wishlist-item.component.html',
  styleUrl: './wishlist-item.component.css'
})
export class WishlistItemComponent {
  @Input() public item:AlbumWishlist = {
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

  constructor(private http: HttpClient, public UserService : UserService, private router: Router) {}

  ngOnInit() {
    this.executeFetch();
  }

  private executeFetch(): void {
    this.http.get("http://localhost:8080/api/albums/" + this.item.idalbum).subscribe({
      next: (response: any) => {
        console.log(response);
        this.Album = response.result;
        //console.log(this.Album);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  public AddToShoppingCart(): void {
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
    this.http.post("http://localhost:8080/api/albumShCarts", { iduser: userId, idalbum: this.item.idalbum },{
      headers:{
        "Authorization": token,
      }
      })
      .subscribe({
        next: (response: any) => {
          window.location.reload();
          this.DeleteItem();
        },
        error: (error: any) => {
          console.error('Failed to add to shopping cart:', error);
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
    this.http.delete("http://localhost:8080/api/albumWhLists/"+this.item._id,{
      headers:{
        "Authorization": token,
      }
      })
      .subscribe({
        next: (response: any) => {
          window.location.reload();
        },
        error: (error: any) => {
          console.error('Failed to add to shopping cart:', error);
        }
      });
  }
}
