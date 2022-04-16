import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

  
// Importing forms module
import { EmailValidator, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    
  constructor() { }

  ngOnInit(): void {
  }

}
