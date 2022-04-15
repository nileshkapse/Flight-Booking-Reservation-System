import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  ImagePath: string;
  flightDetails = [
    {
      id: 1,
      flightNo: 12,
      flightName: 'Flight12',
      flightDate: '09-April-2022',
      flightTime: '2:00pm',
      routeSource: 'Pune',
      routeDestination: 'Mumbai',
      totalSeats:150,
      remainingSeats:40,
      ticketCost:7000,
      imgSrc :"assets/flightImges/aeroplane_img.jpg"
    },
    {
      id: 2,
      flightNo: 13,
      flightName: 'Flight13',
      flightDate: '22-April-2022',
      flightTime: '7:00pm',
      routeSource: 'Mumbai',
      routeDestination: 'Pune',
      totalSeats:170,
      remainingSeats:40,
      ticketCost:6000,
      imgSrc :"assets/flightImges/img5.png"
    },
    {
      id: 3,
      flightNo: 55,
      flightName: 'Flight55',
      flightDate: '09-April-2022',
      flightTime: '3:00pm',
      routeSource: 'Banglore',
      routeDestination: 'Mumbai',
      totalSeats:150,
      remainingSeats:40,
      ticketCost:12000,
      imgSrc :"assets/flightImges/img1.png"
    },
    {
      id: 4,
      flightNo: 44,
      flightName: 'Flight44',
      flightDate: '09-April-2022',
      flightTime: '10:00pm',
      routeSource: 'Pune',
      routeDestination: 'Banglore',
      totalSeats:150,
      remainingSeats:40,
      ticketCost:11000,
      imgSrc :"assets/flightImges/img2.png"
    },
    {
      id: 5,
      flightNo: 77,
      flightName: 'Flight77',
      flightDate: '09-auguest-2022',
      flightTime: '5:15pm',
      routeSource: 'Pune',
      routeDestination: 'Hyderabad',
      totalSeats:150,
      remainingSeats:9,
      ticketCost:7000,
      imgSrc :"assets/flightImges/img3.png"
    },
    {
      id: 6,
      flightNo: 809,
      flightName: 'Flight809',
      flightDate: '09-july-2022',
      flightTime: '2:00am',
      routeSource: 'banglore',
      routeDestination: 'Mumbai',
      totalSeats:150,
      remainingSeats:4,
      ticketCost:9600,
      imgSrc :"assets/flightImges/img4.png"
    },
  ];

  constructor() {this.ImagePath = './flightImges/assets/flightImges/aeroplane_img.jpg'}

  ngOnInit(): void {}
}
