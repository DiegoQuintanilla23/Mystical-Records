import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor( private router: Router, private UserService : UserService){}

  public get isAuth(): boolean{
    const token = localStorage.getItem("AuthToken");
    if(token){
      return true;
    }else{
      return false;
    }
  }

  public get isAdmin(): boolean{
    const Admin = this.UserService.ActiveUser.role;
    if(Admin=="admin"){
      return true;
    }else{
      return false;
    }
  }

  public Logout(): void{
    localStorage.removeItem("AuthToken");
    this.UserService.resetActiveUser();
    this.router.navigate(['home']);
  }

}
