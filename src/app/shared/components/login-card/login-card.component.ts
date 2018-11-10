import {Component, OnInit} from '@angular/core';
import {AppConfig} from '../../../configs/app.config';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SessionService } from '../../../core/services/session.service';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent implements OnInit {
  title = AppConfig.title;

  constructor(private router: Router, private sessionService: SessionService) {
  }
  ngOnInit() {

  }

  onClickLogin(form: NgForm) {
    event.preventDefault();
    const username = form.value.username;
    const password = form.value.password;

    this.sessionService.onLogin(username, password);
  }
}
