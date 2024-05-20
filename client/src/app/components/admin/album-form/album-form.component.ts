import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { Album } from '../../../interfaces/album.interface';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, NgIf],
  templateUrl: './album-form.component.html',
  styleUrl: './album-form.component.css'
})
export class AlbumFormComponent {
  public album: Album = {
    idclassification:'',
    name:'',
    artist:'',
    genre:'',
    description:'',
    quantity:0,
    format:'',
    price:0,
    releaseYear:0,
    image:'',
    discount:0
  };

  constructor( private router: Router, private http: HttpClient, public UserService : UserService){}

  public submitForm() {
    const token = localStorage.getItem("AuthToken") ?? "";
    const userId = this.UserService.ActiveUser._id;
    if(token==""||userId==""||this.album.name==""||this.album.artist==""||this.album.genre==""||this.album.name==""||this.album.description==""||this.album.format==""||this.album.price==0||this.album.releaseYear==0||this.album.image=="")
    {
      return;
    }
    this.http.post("http://localhost:8080/api/albums",{
      idclassification:this.album.idclassification,
      name:this.album.name,
      artist:this.album.artist,
      genre:this.album.genre,
      description:this.album.description,
      quantity:this.album.quantity,
      format:this.album.format,
      price:this.album.price,
      releaseYear:this.album.releaseYear,
      image:this.album.image
    },{
      headers:{
        "Authorization": token,
      }
      }).subscribe({
      next: (response: any) => {
        this.CleanAlbum();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  public CleanAlbum(){
    this.album = {
      idclassification:'',
      name:'',
      artist:'',
      genre:'',
      description:'',
      quantity:0,
      format:'',
      price:0,
      releaseYear:0,
      image:'',
      discount:0
    };
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigate(['/dashboard/admin/view-products']);
  }
}
