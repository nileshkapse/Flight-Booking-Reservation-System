import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',

  template: ` 
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">

    <footer class="footer">
        <div class="container context has-text-centered">
          
            <p>Made by group number 1</p>

        </div>
    </footer>
`,
 // templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
