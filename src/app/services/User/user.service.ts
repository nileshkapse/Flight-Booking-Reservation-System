import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from 'src/app/models/Models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User[];

  constructor() {
    this.user = [];
  }

  getCurrentUser() {
    return of(this.user);
  }

  signupUser(user: User) {
    console.log('Signup User');
  }

  loginUser(user: any) {
    console.log('Login User');

    if (user.password === '123') {
      if (this.user.length === 0) this.user.push(user);
    } else {
      console.log('Please enter valid password');
    }
  }
}
