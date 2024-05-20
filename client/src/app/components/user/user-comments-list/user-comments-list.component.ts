import { Component, Input } from '@angular/core';
import { CommentComponent } from '../../comment/comment.component';
import { Comment } from '../../../interfaces/comment.interface';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-comments-list',
  standalone: true,
  imports: [CommentComponent, NgFor, RouterLink],
  templateUrl: './user-comments-list.component.html',
  styleUrl: './user-comments-list.component.css'
})
export class UserCommentsListComponent {
  @Input() public comments:Comment[] = [];

}
