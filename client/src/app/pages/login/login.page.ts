import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.page.html',
  styleUrl: './login.page.css'
})
export class LoginPage {
  public emailInput: string = "";
  public passwordInput: string = "";

  constructor(private http: HttpClient, private router: Router, private UserService : UserService){}

  public Login(): void{
    if(this.emailInput==""||this.passwordInput==""){
      return;
    }

    this.http.post("http://localhost:8080/api/auth/login",
      {
        "email": this.emailInput,
        "password": this.passwordInput,
      }
    ).subscribe({
      next: (response:any)=>{
        localStorage.setItem("AuthToken",response.token);
        this.UserService.fetchUser(this.emailInput,this.passwordInput);
        this.router.navigate(['home']);
      },
      error:(error: any)=>{
        //console.log(error);
      }
    })
  }
}
