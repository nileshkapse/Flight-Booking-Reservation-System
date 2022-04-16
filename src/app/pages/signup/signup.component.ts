import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private userService: UserService, private toastr: ToastrService) {
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
      this.toastr.error('Error', 'Password not matched');
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

    this.userService.signupUser(newData).subscribe(
      (result: any) => {
        console.log(result);
        if (result.isDone) {
          console.log('Account Created Successfully');

          this.name = '';
          this.email = '';
          this.phoneNo = '';
          this.password = '';
          this.repeatPassword = '';
          this.rememberMe = false;

          this.toastr.success('Account Created Successfully', 'Please Login');
        } else {
          console.log('Error', result.err.writeErrors[0].errmsg);
          this.toastr.error('Error', result.err.writeErrors[0].errmsg);
        }
      },
      (error) => {
        console.log('Error Occured: ', error.error.msg);
        this.toastr.error('Error', error.error.msg);
      }
    );
  }
}
