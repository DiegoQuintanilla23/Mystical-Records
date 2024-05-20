import { Component, Input } from '@angular/core';
import { Classification } from '../../../interfaces/classification.interface';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../services/user.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-clasif-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './clasif-table.component.html',
  styleUrl: './clasif-table.component.css'
})
export class ClasifTableComponent {
  @Input() public CFlist:Classification[] = [];

  constructor( private http: HttpClient, public UserService : UserService){}

  public DeleteItem(id:string): void {
    const token = localStorage.getItem("AuthToken") ?? "";
    const userId = this.UserService.ActiveUser._id;
    if(token==""||userId==""||this.UserService.ActiveUser.role!="admin")
    {
      return;
    }
    this.http.delete("http://localhost:8080/api/classifications/"+id,{
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
