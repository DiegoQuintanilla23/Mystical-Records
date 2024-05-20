import { Component } from '@angular/core';
import { UserCommentsListComponent } from '../../../components/user/user-comments-list/user-comments-list.component';
import { UserService } from '../../../services/user.service';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../../../interfaces/comment.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [UserCommentsListComponent, NgIf, NgFor,FormsModule],
  templateUrl: './comments.page.html',
  styleUrl: './comments.page.css'
})
export class CommentsPage {
  public Comments:Comment[] = [];

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
    this.http.get("http://localhost:8080/api/comments/user/"+userId,{
      headers:{
        "Authorization": token,
      }
      }).subscribe(
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


}
