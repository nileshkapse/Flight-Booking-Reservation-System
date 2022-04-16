import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  name: string;
  email: string;
  phoneNo: string;
  password: string;
  repeatPassword: string;
  rememberMe: boolean;

  constructor(private userService: UserService) {
    this.name = '';
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
      name: this.name,
      username: username,
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe,
    };

    this.userService.signupUser(newData);

    console.log('User Signup Data: ', newData);

    this.email = '';
    this.phoneNo = '';
    this.password = '';
    this.repeatPassword = '';
    this.rememberMe = false;
  }
}
