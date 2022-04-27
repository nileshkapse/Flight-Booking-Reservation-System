import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css'],
})
export class AccountSettingsComponent implements OnInit {
  displayModal = false;

  currentUserData: any[];

  // Update Account Details Variables
  name: string;
  phoneNo: string;

  // Change Password Variables
  oldPassword: string;
  password: string;
  confirmPassword: string;

  // Delete Account
  deleteAccountPassword: string;
  isSureToDelete: boolean;
  isAgreeToDataLoss: boolean;

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.currentUserData = [];
    this.name = '';
    this.phoneNo = '';

    this.oldPassword = '';
    this.password = '';
    this.confirmPassword = '';

    this.deleteAccountPassword = '';
    this.isSureToDelete = false;
    this.isAgreeToDataLoss = false;
  }

  ngOnInit(): void {
    this.displayModal = true;

    this.userService.getCurrentUserData().subscribe(
      (result: any) => {
        console.log(result);
        if (result.isDone) {
          console.log('Fetched Userdata');

          this.toastr.success('Fetched Userdata');
          this.currentUserData.splice(0, 1);
          this.currentUserData.push([...result.data]);

          this.name = result.data[0].name;
          this.phoneNo = result.data[0].phoneNo;
        } else {
          console.log('Error', result.err.writeErrors[0].errmsg);
          this.toastr.error('Error', result.err.writeErrors[0].errmsg);
        }
        this.displayModal = false;
      },
      (error) => {
        console.log('Error Occured: ', error.error.msg);
        this.toastr.error('Error', error.error.msg);
        this.displayModal = false;
      }
    );
  }

  handleUpdateAccoutDetails(event: Event) {
    event.preventDefault();

    const newData = {
      name: this.name,
      phoneNo: this.phoneNo,
    };

    this.displayModal = true;
    this.userService.updateAccountDetails(newData).subscribe(
      (result: any) => {
        console.log(result);
        if (result.data.modifiedCount > 0) {
          console.log('Data Updated Successfully');
          this.toastr.success('Data Updated Successfully');
        } else {
          console.log('Error', 'Failed to update details');
          this.toastr.error('Error', 'Failed to update details');
        }
        this.displayModal = false;
      },
      (error) => {
        console.log('Error Occured: ', error.error.msg);
        this.toastr.error('Error', error.error.msg);
        this.displayModal = false;
      }
    );
    console.log(newData);
  }

  handleChangePassword(event: Event) {
    event.preventDefault();

    if (this.password !== this.confirmPassword) {
      this.toastr.error('Error', 'Password and confirm password not matched');
      return console.log('Password and confirm password not matched');
    }
    const newData = {
      oldPassword: this.oldPassword,
      newPassword: this.password,
    };

    console.log(newData);

    this.displayModal = true;

    this.userService.changeUserPassword(newData).subscribe(
      (result: any) => {
        console.log(result);

        if (result.isError) {
          this.toastr.error('Error', result.msg);
          this.displayModal = false;
          return console.log(result.msg);
        }

        if (result.hasOwnProperty('isAuthorized')) {
          if (!result.isAuthorized) {
            this.toastr.error('Password Authentication Error', result.msg);
            this.displayModal = false;
            return console.log(result.msg);
          }
        }

        this.toastr.success('Old Password is Valid', 'Changing password');
        if (result.data.modifiedCount > 0) {
          console.log('Password Changed Successfully');
          this.toastr.success('Password Changed Successfully');

          localStorage.clear();
          this.userService.logoutUser();
          this.displayModal = false;

          this.router.navigate(['/login-page']);
        } else {
          console.log('Error', 'Failed to change password');
          this.toastr.error('Error', 'Failed to change password');
          this.displayModal = false;
        }
      },
      (err) => {
        console.log(err);
        this.toastr.error('Error', err);
        this.displayModal = false;
      }
    );
  }
}
