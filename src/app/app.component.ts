import { Component } from '@angular/core';
import { environments  }from '@env/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CMO-Automate-FrontEnd';

  constructor(){
    console.log(environments)
  }
}
