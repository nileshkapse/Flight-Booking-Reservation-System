import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/User/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserLoginGuard implements CanActivate {
  users: any[];

  constructor(private userService: UserService, private router: Router) {
    this.users = [];
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.userService.getCurrentUser().subscribe((userData) => {
      this.users = userData;
    });

    if (this.users.length === 0) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
