import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-history',
  templateUrl: './flight-history.component.html',
  styleUrls: ['./flight-history.component.css'],
})
export class FlightHistoryComponent implements OnInit {
  bookingHistory = [
    {
      id: 1,
      flightNo: 12,
      flightName: 'Flight12',
      flightDate: '09-April-2022',
      routeSource: 'Pune',
      routeDestination: 'Mumbai',
      totalTickets: 5,
      totalCost: 15000,
    },
    {
      id: 2,
      flightNo: 123,
      flightName: 'Flight123',
      flightDate: '09-April-2022',
      routeSource: 'Pune',
      routeDestination: 'Mumbai',
      totalTickets: 5,
      totalCost: 15000,
    },
    {
      id: 3,
      flightNo: 124,
      flightName: 'Flight124',
      flightDate: '09-April-2022',
      routeSource: 'Pune',
      routeDestination: 'Mumbai',
      totalTickets: 5,
      totalCost: 15000,
    },
    {
      id: 4,
      flightNo: 5,
      flightName: 'Flight122',
      flightDate: '09-April-2022',
      routeSource: 'Pune',
      routeDestination: 'Mumbai',
      totalTickets: 5,
      totalCost: 15000,
    },
    {
      id: 5,
      flightNo: 236,
      flightName: 'Flight12234',
      flightDate: '09-April-2022',
      routeSource: 'Pune',
      routeDestination: 'Mumbai',
      totalTickets: 5,
      totalCost: 15000,
    },
    {
      id: 6,
      flightNo: 3127,
      flightName: 'Flight12342',
      flightDate: '09-April-2022',
      routeSource: 'Pune',
      routeDestination: 'Mumbai',
      totalTickets: 5,
      totalCost: 15000,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
