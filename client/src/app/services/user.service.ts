import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';

@Injectable({
    providedIn: 'root',
})
export class UserService {

public ActiveUser: User = {
    name: '',
    email: '',
    password: '',
    role: 'user',
    address: '',
}

constructor(private http: HttpClient) {}

}
