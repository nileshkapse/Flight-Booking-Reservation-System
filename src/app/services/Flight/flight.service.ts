import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { API_PATH, TOKEN_PREFIX } from 'src/app/constants/IMPData';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  flights: any[];

  constructor(private http: HttpClient) {
    this.flights = [];
  }

  getFetchedFlights() {
    return of(this.flights);
  }

  getFlights(filterObject: any) {
    const jwt_token = localStorage.getItem('token');

    return this.http.post(
      `${API_PATH}/flight/getflights`,
      {
        filters: filterObject,
      },
      {
        headers: {
          authorization: `${TOKEN_PREFIX} ${jwt_token}`,
        },
      }
    );
  }

  addNewFligt(flightData: any) {
    const jwt_token = localStorage.getItem('token');

    return this.http.post(
      `${API_PATH}/flight/addFlight`,
      { data: flightData },
      {
        headers: {
          authorization: `${TOKEN_PREFIX} ${jwt_token}`,
        },
      }
    );
  }
}
