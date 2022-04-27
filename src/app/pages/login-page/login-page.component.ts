import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  user: any[];
  username: string;
  password: string;
  rememberMe: boolean;

  displayModal = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.user = [];
    this.username = '';
    this.password = '';
    this.rememberMe = false;
  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((userData) => {
      this.user = userData;
    });

    if (this.user.length > 0) {
      this.router.navigate(['/']);
    }
  }

  handleFormSubmit(event: Event) {
    event.preventDefault();

    const newData = {
      username: this.username,
      password: this.password,
      rememberMe: this.rememberMe,
    };

    this.displayModal = true;
    this.userService.loginUser(newData).subscribe(
      (result: any) => {
        console.log(result);

        if (result.isError) {
          this.toastr.error('Error', result.msg);
          this.displayModal = false;
          return console.log(result.msg);
        }

        if (result.hasOwnProperty('isAuthorized')) {
          if (!result.isAuthorized) {
            this.toastr.error('Error', result.msg);
            this.displayModal = false;
            return console.log(result.msg);
          }
        }

        const newUser: any = {
          email: result.email,
          id: result.id,
          role: result.role,
          username: result.username,
          name: result.name,
          rememberMe: this.rememberMe,
        };

        this.toastr.success('Authorized User', 'Account LoggedIn Successfully');

        // Saving data to localstorage
        localStorage.setItem('token', result.token);
        localStorage.setItem('username', result.username);
        localStorage.setItem('id', result.id);
        localStorage.setItem('role', result.role);
        localStorage.setItem('name', result.name);
        localStorage.setItem('email', result.email);

        this.userService.user.push(newUser);

        console.log('Login Data: ', newData);

        this.username = '';
        this.password = '';
        this.rememberMe = false;

        this.displayModal = false;

        this.router.navigate(['']);
      },
      (err) => {
        console.log(err);
        this.toastr.error('Error', err);
        this.displayModal = false;
      }
    );
  }
}
