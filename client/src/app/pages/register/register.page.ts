import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.page.html',
  styleUrl: './register.page.css'
})
export class RegisterPage {
  public User: User = {
    name: '',
    email: '',
    password: '',
    role: 'user',
    address: '',
  }
  public RePass: string = "";

  constructor(private http: HttpClient, private router: Router){}

  public Register(): void{
    if(this.User.name==""||this.User.email==""||this.User.password==""||this.RePass==""||this.User.password!=this.RePass){
      return;
    }

    this.http.post("http://localhost:8080/api/users",this.User).subscribe({
      next: (response: any) => {
        this.router.navigate(['/login']);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
