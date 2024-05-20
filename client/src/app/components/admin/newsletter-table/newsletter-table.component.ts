import { Component, Input } from '@angular/core';
import { Newsletter } from '../../../interfaces/newsletter.interface';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-newsletter-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './newsletter-table.component.html',
  styleUrl: './newsletter-table.component.css'
})
export class NewsletterTableComponent {
  @Input() public NLlist:Newsletter[] = [];

  constructor( private http: HttpClient, public UserService : UserService){}

  public DeleteItem(id:string): void {
    const token = localStorage.getItem("AuthToken") ?? "";
    const userId = this.UserService.ActiveUser._id;
    if(token==""||userId==""||this.UserService.ActiveUser.role!="admin")
    {
      return;
    }
    this.http.delete("http://localhost:8080/api/newsletters/"+id,{
      headers:{
        "Authorization": token,
      }
      })
      .subscribe({
        next: (response: any) => {
          window.location.reload();
        },
        error: (error: any) => {
          console.error('', error);
        }
      });
  }

}
