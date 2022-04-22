import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ADMIN_ROLE } from 'src/app/constants/IMPData';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  displayWelcomeHeader: boolean;

  imageSrc = 'assets/Images/menu2.png';
  user: any[];
  adminRole: any;
  constructor(private userService: UserService, private router: Router) {
    this.user = [];
    this.adminRole = ADMIN_ROLE;
    this.displayWelcomeHeader = true;
  }

  ngOnInit(): void {
    if (localStorage.getItem('displayWelcomeHeader')) {
      this.displayWelcomeHeader = false;
    }
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

  handleHeaderRemove() {
    this.displayWelcomeHeader = false;
    localStorage.setItem('displayWelcomeHeader', 'false');
  }
}
