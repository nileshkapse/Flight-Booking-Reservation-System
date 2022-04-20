import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  imageSrc = 'assets/Images/menu2.png';
  user: any[];

  constructor(private userService: UserService, private router: Router) {
    this.user = [];
  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((user) => {
      this.user = user;
    });
  }

  displayUser() {
    console.log('user : ', this.user);
  }

  handleLogout() {
    localStorage.clear();
    this.userService.logoutUser();
    this.router.navigate(['/login-page']);
  }
}
