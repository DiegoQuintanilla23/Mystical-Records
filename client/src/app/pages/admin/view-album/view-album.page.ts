import { Component } from '@angular/core';
import { ProductCardComponent } from '../../../components/product-card/product-card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-album',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './view-album.page.html',
  styleUrl: './view-album.page.css'
})
export class ViewAlbumPage {
  public albumId: string = '';

  constructor( private router: Router,private http: HttpClient, public UserService : UserService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.route.params.subscribe(params => {
      this.albumId = params['id'];
      console.log(this.albumId);
    });
  }

  public deleteAlbum(): void {
    const token = localStorage.getItem("AuthToken") ?? "";
    const userId = this.UserService.ActiveUser._id;
    if(token==""||userId=="")
    {
      return;
    }
    this.http.delete("http://localhost:8080/api/albums/"+this.albumId,{
      headers:{
        "Authorization": token,
      }
      }).subscribe({
      next: (response: any) => {
        this.router.navigate(['/dashboard/admin/view-products']);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  public EditAlbum(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigate(['/admin/edit-album/'+this.albumId]);
  }

}
