import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH, TOKEN_PREFIX } from 'src/app/constants/IMPData';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(private http: HttpClient) {}

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
