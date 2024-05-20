import { Component } from '@angular/core';
import { User } from '../../../interfaces/user.interface';
import { UserService } from '../../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  public User: User = {
    name: '',
    email: '',
    password: '',
    role: 'user',
    address: '',
  }
  public Update:boolean = false;
  public newName:string = '';
  public newAddress:string = '';
  public newEmail:string = '';
  public CurrentPass:string = '';
  public newPass:string = '';
  public REnewPass:string = '';
  public newCardDigits:string = '';
  public newCardSN:string = '';
  public newCardDate:Date = new Date();

  constructor(private http: HttpClient, public UserService : UserService, private router: Router) {}

  public UpdateName(): void {
    const token = localStorage.getItem("AuthToken") ?? "";
    const userId = this.UserService.ActiveUser._id;
    this.Update = false;
    if(token==""||userId==""||this.newName==""||this.newName==this.UserService.ActiveUser.name)
    {
      //console.log("no");
      return;
    }
    this.User.name = this.newName;
    this.http.put("http://localhost:8080/api/users/name/"+userId,this.User,{
      headers:{
        "Authorization": token,
      }
      }).subscribe({
      next: (response: any) => {
        this.newName = "";
        this.UserService.fetchUser(this.UserService.ActiveUser.email, this.UserService.ActiveUser.password);
        this.Update = true;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  public UpdateAddress(): void {
    const token = localStorage.getItem("AuthToken") ?? "";
    const userId = this.UserService.ActiveUser._id;
    this.Update = false;
    if(token==""||userId==""||this.newAddress==""||this.newAddress==this.UserService.ActiveUser.address)
    {
      //console.log("no");
      return;
    }
    this.User.address = this.newAddress;
    this.http.put("http://localhost:8080/api/users/address/"+userId,this.User,{
      headers:{
        "Authorization": token,
      }
      }).subscribe({
      next: (response: any) => {
        this.newAddress = "";
        this.UserService.fetchUser(this.UserService.ActiveUser.email, this.UserService.ActiveUser.password);
        this.Update = true;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
  public UpdateEmail(): void {
    const token = localStorage.getItem("AuthToken") ?? "";
    const userId = this.UserService.ActiveUser._id;
    this.Update = false;
    if(token==""||userId==""||this.newEmail==""||this.newEmail==this.UserService.ActiveUser.email)
    {
      //console.log("no");
      return;
    }
    this.User.email = this.newEmail;
    this.http.put("http://localhost:8080/api/users/email/"+userId,this.User,{
      headers:{
        "Authorization": token,
      }
      }).subscribe({
      next: (response: any) => {
        this.newEmail = "";
        this.UserService.fetchUser(this.User.email, this.UserService.ActiveUser.password);
        this.Update = true;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
  public UpdatePassword(): void {
    const token = localStorage.getItem("AuthToken") ?? "";
    const userId = this.UserService.ActiveUser._id;
    this.Update = false;
    if(token==""||userId==""||this.newPass==""||this.REnewPass==""||this.CurrentPass==""||this.newPass==this.UserService.ActiveUser.password||this.newPass!=this.REnewPass||this.CurrentPass!=this.UserService.ActiveUser.password)
    {
      //console.log("no");
      return;
    }
    this.User.password = this.newPass;
    this.http.put("http://localhost:8080/api/users/password/"+userId,this.User,{
      headers:{
        "Authorization": token,
      }
      }).subscribe({
      next: (response: any) => {
        this.newPass = "";
        this.REnewPass = "";
        this.CurrentPass = "";
        this.UserService.fetchUser(this.UserService.ActiveUser.email, this.User.password);
        this.Update = true;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
  public UpdateCardDetails(val:boolean): void {
    const token = localStorage.getItem("AuthToken") ?? "";
    const userId = this.UserService.ActiveUser._id;
    this.Update = false;
    if(token==""||userId==""||this.newCardDigits==""||this.newCardSN==""||this.newCardDigits==this.UserService.ActiveUser.cardNumber)
    {
      //console.log("no");
      return;
    }
    this.User.cardNumber = this.newCardDigits;
    this.User.cardSecurityNumber = this.newCardSN;
    this.User.cardExpirationDate = this.newCardDate;
    this.http.put("http://localhost:8080/api/users/cardinfo/"+userId,this.User,{
      headers:{
        "Authorization": token,
      }
      }).subscribe({
      next: (response: any) => {
        this.newCardDigits = "";
        this.newCardSN = "";
        this.UserService.fetchUser(this.UserService.ActiveUser.email, this.UserService.ActiveUser.password);
        this.Update = true;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  // Este getter convierte la fecha en una cadena de texto con el formato adecuado
  get formattedDate(): string {
    return this.newCardDate.toISOString().substring(0, 10);
  }

  // Este setter convierte la cadena de texto de nuevo a un objeto Date
  set formattedDate(value: string) {
    this.newCardDate = new Date(value);
  }

  // Método opcional para manejar el cambio de fecha directamente desde el input
  onDateChange(value: string): void {
    this.newCardDate = new Date(value);
  }

}
