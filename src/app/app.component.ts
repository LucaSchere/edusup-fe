import {Component, OnInit} from '@angular/core';
import {AppConfig} from './configs/app.config';
import { AuthService } from './core/services/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean;
  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

}
