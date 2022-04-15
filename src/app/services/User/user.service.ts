import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { API_PATH } from 'src/app/constants/IMPData';
import { User } from 'src/app/models/Models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User[];

  constructor(private http: HttpClient) {
    this.user = [];
  }

  getCurrentUser() {
    return of(this.user);
  }

  signupUser(user: any) {
    console.log('USER SERVICE: Signup User: ', user);

    this.http
      .post(`${API_PATH}/auth/signup`, {
        username: user.username,
        password: user.password,
        email: user.email,
        name: user.name,
      })
      .subscribe(
        (result: any) => {
          console.log(result);
          if (result.isDone) {
            console.log('Account Created Successfully');
          } else {
            console.log(result.err.writeErrors[0].errmsg);
          }
        },
        (error) => {
          console.log('Error Occured: ', error.error.msg);
        }
      );
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
