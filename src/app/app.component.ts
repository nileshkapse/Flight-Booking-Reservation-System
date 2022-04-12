import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
  <app-header></app-header>
  <app-home></app-home>
  <app-footer></app-footer>
  <router-outlet></router-outlet>

  
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
