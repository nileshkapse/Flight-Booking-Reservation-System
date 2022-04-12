import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: ` 
 

<section class="hero is-bold is-fullheight is-fullwidth">
  <div class="hero-body">
    <div class="container has-text-centered " >
        <img src="assets/Images/screen1.jpg" 
    
            style="height: auto; 
              width:100%;  
              background-position: center;
              background-repeat: no-repeat;
              background-size: 100%; 
              border: 1px solid #ddd;
              border-radius: 10px;
              padding: 20px;
              width: 100%;">
         <div class="top-left">AEROFLY</div>
         <div class="bottom-right">Discover Amazing Things EveryWhere</div>
    </div>
  </div>
</section>

<div class="All" style="background-image: url(assets/Images/background_img1.jpg);">
              <div class="container" style="margin-top=35px;margin-bottom:35px" >
                  <img src="assets/Images/window1.jpg" alt="Avatar" class="image1" style="height: 300px;margin-top=35px; border-radius: 10px;">
                      <div class="overlay">
                          <div class="text">
                          Advanced-Flight features<br><p> like having Flight Reservation,<br> Modification, Flight Booking <br>Quotation, Flight API <br>Integration and more.
                          </div>
                      </div>      
              </div>
              
              <div class="container2" style="margin-top: 20px; margin-bottom:35px">
                <img src="assets/Images/seat.jpg" alt="Avatar" class="image2" style="height: 300px; border-radius: 10px;">
                <div class="overlay2">
                  <div class="text">     
                    Passenger reservations and records <br> of flight ticket bookings with<br> dynamic packages, transfers <br> and more to improve customer experience</div>
                </div>
              </div>
 

              <div class="container2" style="margin-top: 20px; margin-bottom:35px">
                <img src="assets/Images/piolet.jpg" alt="Avatar" class="image2" style="height: 300px; border-radius: 10px;">
                <div class="overlay2">
                  <div class="text"> Inventory management solutions,<br> Flight Details and Incorporate <br> flight schedules, flight fares,<br>  fare tariffs, seat availability is <br>  Well Managed and Depolyed</div>
                </div>
              </div>
</div>

`,
  //templateUrl: './home.component.html'  position: relative;,
  styles: [`


    .All {
         width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      
      .top-left {
        position: absolute;
        top: 8px;
        left: 16px;
        margin-top:60px;
        margin-left:40px;
        color:white;
        text-shadow: 2px 2px 4px #000000;
        font-size: 60px;
        font-style: italic;
        font-weight: bold;
        font-family: "Georgia", Times, serif;
      }

      .bottom-right {
        position: absolute;
        bottom: 8px;
        right: 16px;
        margin-bottom:50px;
        margin-right:40px;
        color:white;
        text-shadow: 2px 2px 4px #000000;
        font-size: 40px;
        font-style: italic;
        font-weight: bold;
        font-family: "cursive";
      }


    .container {
      position: relative;
        margin-left:40px;
        width: 80%;
        
      }
    .image1 {
        display: block;
        width: 80%;
        /*height: auto;*/
      }
    .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #2874A6 ;
        overflow: hidden;
        width: 80%;
        height: 0;
        transition: .5s ease;
      }
    .container:hover .overlay {
        height: 100%;
      }
    .text {
        white-space: nowrap; 
        color: white;
        font-size: 20px;
        font-family: "Georgia", Times, serif;
        position: absolute;
        overflow: hidden;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
      }
/*---------------------------------------------*/
  .container2 {
  position: relative;
  width: 80%;
}

.image2 {
  display: block;
  width: 80%;
  height: auto;
}

.overlay2 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #2874A6;
  overflow: hidden;
  width: 0;
  height: 100%;
  transition: .5s ease;
}

.container2:hover .overlay2 {
  width: 80%;
}
  
  `]
})
export class HomeComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
  }

}
