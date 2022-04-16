import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { API_PATH } from 'src/app/constants/IMPData';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: any[];

  subject = new Subject<any>();

  constructor(private http: HttpClient) {
    this.user = [];
    this.subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });
  }

  getCurrentUser() {
    return of(this.user);
  }

  signupUser(user: any) {
    console.log('USER SERVICE: Signup User: ', user);

    return this.http.post(`${API_PATH}/auth/signup`, {
      username: user.username,
      password: user.password,
      email: user.email,
      name: user.name,
    });
  }

  loginUser(user: any) {
    console.log('Login User');

    return this.http.post(`${API_PATH}/auth/login`, {
      username: user.username,
      password: user.password,
    });
  }
}
