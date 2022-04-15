import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;
  rememberMe: boolean;

  constructor(private userService: UserService, private router: Router) {
    this.username = '';
    this.password = '';
    this.rememberMe = false;
  }

  ngOnInit(): void {}

  handleFormSubmit(event: Event) {
    event.preventDefault();

    const newData = {
      username: this.username,
      password: this.password,
      rememberMe: this.rememberMe,
    };

    this.userService.loginUser(newData).subscribe(
      (result: any) => {
        console.log(result);

        if (result.isError) {
          return console.log(result.msg);
        }

        if (result.hasOwnProperty('isAuthorized')) {
          if (!result.isAuthorized) return console.log(result.msg);
        }

        const newUser: any = {
          email: result.email,
          id: result.id,
          role: result.role,
          username: result.username,
          name: result.name,
          token: result.token,
          rememberMe: this.rememberMe,
        };

        this.userService.user.push(newUser);

        this.router.navigate(['']);
      },
      (err) => console.log(err)
    );

    console.log('Login Data: ', newData);

    this.username = '';
    this.password = '';
    this.rememberMe = false;
  }
}
