import { Component, OnInit } from '@angular/core';
import {AppConfig} from '../../../../configs/app.config';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent implements OnInit {

  title = AppConfig.title;
  constructor() { }

  ngOnInit() {
  }

}
