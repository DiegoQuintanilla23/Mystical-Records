import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Album } from '../../interfaces/album.interface';
import { NgIf } from '@angular/common';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() public idAlbum:string = '';
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
  public Added:boolean = false;

  constructor(private http: HttpClient, public UserService : UserService, private router: Router) {}

  ngOnInit() {
    this.executeFetch();
  }

  private executeFetch(): void {
    this.http.get("http://localhost:8080/api/albums/" + this.idAlbum).subscribe({
      next: (response: any) => {
        //console.log(response);
        this.Album = response.result;
        this.CalcDiscount();
        //console.log(this.Album);
      },
      error: (error: any) => {
        console.log(error);
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

  public AddToWishlist(): void {
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
    this.http.post("http://localhost:8080/api/albumWhLists", { iduser: userId, idalbum: this.idAlbum },{
      headers:{
        "Authorization": token,
      }
      })
      .subscribe({
        next: (response: any) => {
          //console.log('Added to wishlist successfully');
          this.Added = true;
        },
        error: (error: any) => {
          console.error('Failed to add to wishlist:', error);
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
    this.http.post("http://localhost:8080/api/albumShCarts", { iduser: userId, idalbum: this.idAlbum },{
      headers:{
        "Authorization": token,
      }
      })
      .subscribe({
        next: (response: any) => {
          //console.log('Added to shopping cart successfully');
          this.Added = true;
        },
        error: (error: any) => {
          console.error('Failed to add to shopping cart:', error);
        }
      });
  }
}
