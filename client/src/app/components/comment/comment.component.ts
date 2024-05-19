import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Comment } from '../../interfaces/comment.interface';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [NgIf],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  @Input()
  public comment:Comment = {
    _id:'',
    iduser: '',
    idalbum: '',
    author: '',
    message: '',
    createdAt: new Date(),
  };

  constructor(private http: HttpClient, public UserService : UserService, private router: Router){}

  public get itsYours(): boolean{
    const token = localStorage.getItem("AuthToken");
    if(token&&this.UserService.ActiveUser._id == this.comment.iduser){
      return true;
    }else{
      return false;
    }
  }

  public deleteComment(): void {
    const token = localStorage.getItem("AuthToken") ?? "";
    const userId = this.UserService.ActiveUser._id;
    if(token==""||userId=="")
    {
      return;
    }
    if(this.comment.iduser!=userId){
      return;
    }
    this.http.delete("http://localhost:8080/api/comments/"+this.comment._id,{
      headers:{
        "Authorization": token,
      }
      }).subscribe({
      next: (response: any) => {
        window.location.reload();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
