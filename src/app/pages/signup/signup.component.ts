import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  email: string;
  phoneNo: string;
  password: string;
  repeatPassword: string;
  rememberMe: boolean;

  constructor() {
    this.email = '';
    this.phoneNo = '';
    this.password = '';
    this.repeatPassword = '';
    this.rememberMe = false;
  }

  ngOnInit(): void {}

  handleFormSubmit(event: Event) {
    event.preventDefault();

    if (this.password !== this.repeatPassword) {
      return console.log('Password not matched');
    }

    // Getting username from email
    const username = this.email.split('@')[0];

    const newData = {
      username: username,
      email: this.email,
      phoneNo: this.phoneNo,
      password: this.password,
    };

    console.log('User Signup Data: ', newData);

    this.email = '';
    this.phoneNo = '';
    this.password = '';
    this.repeatPassword = '';
    this.rememberMe = false;
  }
}
