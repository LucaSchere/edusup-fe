import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../../../configs/app.config';
import {NgForm} from '@angular/forms';
import {SessionService} from '../../../core/services/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.scss']
})
export class RegisterCardComponent implements OnInit {
  title = AppConfig.title;
  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
  }
  onRegister(form: NgForm) {
    event.preventDefault();
    const username = form.value.username;
    const email = form.value.email;
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const birthday = form.value.birthday;
    const password = form.value.password;
    const passwordConfirm = form.value.passwordConfirm;
    this.sessionService.onRegister(username, email, firstName, lastName, birthday, password, passwordConfirm);

  }
}
