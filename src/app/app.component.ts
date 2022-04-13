import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
  <app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  
`,
  //templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'internal and Enternal temoplate';
  imageSrc = 'assets/Images/aero_logo.png'  
   
  constructor() { }
  ngOnInit() {
  }
  changeName() {
    this.title = "TypeScript";
  }

}
