import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css'],
})
export class AccountSettingsComponent implements OnInit {
  // Update Account Details Variables
  username: string;
  name: string;
  dateOfBirth: string;

  // Change Password Variables
  oldPassword: string;
  password: string;
  confirmPassword: string;

  // Delete Account
  deleteAccountPassword: string;
  isSureToDelete: boolean;
  isAgreeToDataLoss: boolean;

  constructor() {
    this.username = '';
    this.name = '';
    this.dateOfBirth = '';

    this.oldPassword = '';
    this.password = '';
    this.confirmPassword = '';

    this.deleteAccountPassword = '';
    this.isSureToDelete = false;
    this.isAgreeToDataLoss = false;
  }

  ngOnInit(): void {}

  handleUpdateAccoutDetails(event: Event) {
    event.preventDefault();

    const newData = {
      username: this.username,
      name: this.name,
      dateOfBirth: this.dateOfBirth,
    };

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
  }

  handleDeleteAccount(event: Event) {
    event.preventDefault();

    const newData = {
      password: this.deleteAccountPassword,
      sureToDelete: this.isSureToDelete,
      agreeToDataLoss: this.isAgreeToDataLoss,
    };

    console.log(newData);
  }
}
