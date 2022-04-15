import { Component, OnInit } from '@angular/core';
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

  constructor(private userService: UserService) {
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

    this.userService.loginUser(newData);

    console.log('Login Data: ', newData);

    this.username = '';
    this.password = '';
    this.rememberMe = false;
  }
}
