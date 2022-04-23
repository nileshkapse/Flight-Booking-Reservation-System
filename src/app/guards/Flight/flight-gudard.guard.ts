import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { FlightService } from 'src/app/services/Flight/flight.service';

@Injectable({
  providedIn: 'root',
})
export class FlightGudardGuard implements CanActivate {
  constructor(private flightService: FlightService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.flightService.selectedFlight.splice(0, 1);
    this.flightService.bookedFlight.splice(0, 1);
    return true;
  }
}
