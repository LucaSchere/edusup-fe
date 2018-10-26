import { Component } from '@angular/core';
import {AppConfig} from './configs/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean;
  constructor() {
    this.isLoggedIn = AppConfig.isLoggedIn;
  }
}
