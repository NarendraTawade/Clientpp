import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'Client-Application';


  myObj : any = [{ 'broker' : 20, 'seller' : 50},
  { 'broker' : 20, 'seller' : 50},
  { 'broker' : 20, 'seller' : 50}
]

  
}
