import { Component } from '@angular/core';
import { CommentComponent } from '../../comment/comment.component';

@Component({
  selector: 'app-user-comments-list',
  standalone: true,
  imports: [CommentComponent],
  templateUrl: './user-comments-list.component.html',
  styleUrl: './user-comments-list.component.css'
})
export class UserCommentsListComponent {

}
