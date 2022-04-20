import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css'],
})
export class AccountSettingsComponent implements OnInit {
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

  constructor(private userService: UserService, private toastr: ToastrService) {
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
      },
      (error) => {
        console.log('Error Occured: ', error.error.msg);
        this.toastr.error('Error', error.error.msg);
      }
    );
  }

  handleUpdateAccoutDetails(event: Event) {
    event.preventDefault();

    const newData = {
      name: this.name,
      phoneNo: this.phoneNo,
    };

    this.userService.updateAccountDetails(newData).subscribe(
      (result: any) => {
        console.log(result);
        if (result.isDone) {
          console.log('Data Updated Successfully');

          this.toastr.success('Data Updated Successfully');
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
    console.log(newData);
  }

  handleChangePassword(event: Event) {
    event.preventDefault();

    if (this.password !== this.confirmPassword) {
      return console.log('Password and confirm password not matched');
    }
    const newData = {
      oldPassword: this.oldPassword,
      password: this.password,
    };

    console.log(newData);

    this.oldPassword = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
