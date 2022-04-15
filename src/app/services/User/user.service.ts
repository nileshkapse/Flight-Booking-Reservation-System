import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { API_PATH } from 'src/app/constants/IMPData';
import { User } from 'src/app/models/Models';

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

    return this.http.post(`${API_PATH}/auth/login`, {
      username: user.username,
      password: user.password,
    });

    /*
    .subscribe(
        (result: any) => {
          console.log(result);

          if (result.isDone) {
            if (result.hasOwnProperty('isAuthorized')) {
              console.log(result.msg);

              const newUser: any = {
                email: result.email,
                id: result.id,
                role: result.role,
                username: result.username,
                name: result.name,
                token: result.token,
                rememberMe: user.rememberMe,
              };
              this.subject.next(newUser);
              this.user.push(newUser);
            } else {
              console.log('Login Successful');
            }
          } else {
            console.log(result.msg);
          }
        },
        (error) => {
          console.log('Error Occured: ', error.error.msg);
        }
      );*/
  }
}
