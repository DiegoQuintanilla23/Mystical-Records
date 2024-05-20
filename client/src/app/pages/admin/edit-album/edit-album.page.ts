import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { Album } from '../../../interfaces/album.interface';
import { Classification } from '../../../interfaces/classification.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-edit-album',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, NgFor],
  templateUrl: './edit-album.page.html',
  styleUrl: './edit-album.page.css'
})
export class EditAlbumPage {
  public albumId: string = '';
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
    image:'',
    discount:0
  }
  public classifications:Classification[] = [];

  constructor( private router: Router,private http: HttpClient, public UserService : UserService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.route.params.subscribe(params => {
      this.albumId = params['id'];
      //console.log(this.albumId);
    });
    this.executeFetch();
  }

  private executeFetch(): void {
    this.http.get("http://localhost:8080/api/albums/" + this.albumId).subscribe({
      next: (response: any) => {
        //console.log(response);
        this.Album = response.result;
        //console.log(this.Album);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
    this.http.get("http://localhost:8080/api/classifications").subscribe(
      {
        next:(response:any)=>{
          //console.log(response);
          this.classifications=response.result;
        },
        error:(error:any)=>{
          console.log(error);
        }
      }
    )
  }
  
  submitForm() {
    const token = localStorage.getItem("AuthToken") ?? "";
    const userId = this.UserService.ActiveUser._id;
    if(token==""||userId==""||this.Album.name==""||this.Album.artist==""||this.Album.genre==""||this.Album.artist==""||this.Album.description==""||this.Album.artist==""||this.Album.format==""||this.Album.price==0||this.Album.releaseYear==0||this.Album.image==""||this.Album.discount>1||this.Album.discount<0)
    {
      //console.log("no");
      return;
    }
    this.http.put("http://localhost:8080/api/albums/"+this.albumId,this.Album,{
      headers:{
        "Authorization": token,
      }
      }).subscribe({
      next: (response: any) => {
        this.router.navigate(['/admin/view-album/'+this.albumId]);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
