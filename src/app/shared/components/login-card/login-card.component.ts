import {Component, OnInit} from '@angular/core';
import {AppConfig} from '../../../configs/app.config';
import {AuthService} from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent implements OnInit {
  title = AppConfig.title;

  constructor(private authService: AuthService, private router: Router) {
  }
  ngOnInit() {

  }

  onClickLogin(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    this.authService.login(username, password).subscribe(data => {
      if (data['success']) {
        console.log(data);
        this.authService.setLoggedIn(true);
        this.router.navigate(['/']);
      }
    });
  }
}
