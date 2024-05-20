import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Newsletter } from '../../interfaces/newsletter.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent {

  public SuscribeMail: Newsletter = {
    email:''
  };
  public Suscribed: boolean = false;

  constructor(private http: HttpClient){}

  public AddNewsletter(): void{
    if(this.SuscribeMail.email==""){
      return;
    }

    this.http.post("http://localhost:8080/api/newsletters",this.SuscribeMail).subscribe({
      next: (response: any) => {
        //console.log(this.SuscribeMail);
        this.Suscribed = true;
        this.SuscribeMail.email = "";
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

}
