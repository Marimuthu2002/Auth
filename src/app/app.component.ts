import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'authh';
  constructor(){
    localStorage.setItem("Emtyname","muthu")
  }
}
