import { Component, Input } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';
import { UserService } from '../../services/user.service';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../../interfaces/comment.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comments-section',
  standalone: true,
  imports: [CommentComponent, NgIf, NgFor,FormsModule],
  templateUrl: './comments-section.component.html',
  styleUrl: './comments-section.component.css'
})
export class CommentsSectionComponent {
  @Input() public idAlbum:string = '';
  public commentval:boolean = true;
  public Comments:Comment[] = [];
  public comment:Comment = {
    iduser: '',
    idalbum: '',
    author: '',
    message: '',
  };

  constructor( private http: HttpClient, public UserService : UserService){}

  ngOnInit() {
    this.executeFetch();
  }

  private executeFetch(): void {
    this.http.get("http://localhost:8080/api/comments/album/"+this.idAlbum).subscribe(
      {
        next:(response:any)=>{
          //console.log(response);
          this.Comments=response.result;
        },
        error:(error:any)=>{
          console.log(error);
        }
      }
    )
  }

  public get isAuth(): boolean{
    const token = localStorage.getItem("AuthToken");
    if(token){
      return true;
    }else{
      return false;
    }
  }

  public submitComment(): void {
    const token = localStorage.getItem("AuthToken") ?? "";
    const userId = this.UserService.ActiveUser._id;
    if(token==""||userId==""||this.comment.message=="")
    {
      return;
    }
    this.comment.author = this.UserService.ActiveUser.name;
    this.comment.iduser = userId;
    this.comment.idalbum = this.idAlbum;
    this.http.post("http://localhost:8080/api/comments",this.comment,{
      headers:{
        "Authorization": token,
      }
      }).subscribe({
      next: (response: any) => {
        this.comment.message = "";
        this.executeFetch();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
