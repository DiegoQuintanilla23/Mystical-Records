import { Component } from '@angular/core';
import { NewsletterTableComponent } from '../../../components/admin/newsletter-table/newsletter-table.component';
import { Newsletter } from '../../../interfaces/newsletter.interface';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [NewsletterTableComponent],
  templateUrl: './newsletter.page.html',
  styleUrl: './newsletter.page.css'
})
export class NewsletterPage {
  public newsletters:Newsletter[] = [];

  constructor( private http: HttpClient, public UserService : UserService){}

  ngOnInit() {
    this.executeFetch();
  }

  private executeFetch(): void {
    const token = localStorage.getItem("AuthToken") ?? "";
    const userId = this.UserService.ActiveUser._id;
    if(token==""||userId==""||this.UserService.ActiveUser.role!="admin")
    {
      return;
    }
    this.http.get("http://localhost:8080/api/newsletters",{
      headers:{
        "Authorization": token,
      }
      }).subscribe(
      {
        next:(response:any)=>{
          this.newsletters=response.result;
          //console.log(this.newsletters);
        },
        error:(error:any)=>{
          console.log(error);
        }
      }
    )
  }

}
