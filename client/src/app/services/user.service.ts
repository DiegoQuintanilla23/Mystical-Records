import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {
    this.loadActiveUserFromStorage();
  }

  private activeUserKey = 'activeUser';

  public ActiveUser: User = {
    _id: '',
    name: '',
    email: '',
    password: '',
    role: 'user',
    address: '',
  };

  private loadActiveUserFromStorage(): void {
    const storedUser = localStorage.getItem(this.activeUserKey);
    if (storedUser) {
      this.ActiveUser = JSON.parse(storedUser);
    }
  }

  public resetActiveUser(): void {
    this.ActiveUser = {
      _id: '',
      name: '',
      email: '',
      password: '',
      role: 'user',
      address: '',
    };
    localStorage.removeItem(this.activeUserKey);
  }

  public fetchUser(emailInput: string, passwordInput: string): void {
    const token = localStorage.getItem('AuthToken') ?? '';
    this.http.post('http://localhost:8080/api/users/oneUser', {
      email: emailInput,
      password: passwordInput,
    }, {
      headers: {
        'Authorization': token,
      }
    }).subscribe({
      next: (response: any) => {
        this.ActiveUser = response.user;
        localStorage.setItem(this.activeUserKey, JSON.stringify(response.user));
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
