import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;
  rememberMe: boolean;

  constructor() {
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

    console.log('Login Data: ', newData);

    this.username = '';
    this.password = '';
    this.rememberMe = false;
  }
}
