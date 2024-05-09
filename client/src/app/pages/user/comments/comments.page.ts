import { Component } from '@angular/core';
import { UserCommentsListComponent } from '../../../components/user/user-comments-list/user-comments-list.component';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [UserCommentsListComponent],
  templateUrl: './comments.page.html',
  styleUrl: './comments.page.css'
})
export class CommentsPage {

}
