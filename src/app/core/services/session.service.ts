import {Component, Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material';
import {User} from '../../models/user.model';
import {st} from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})

export class SessionService {
  private token: string;
  private show: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public sessionUser: User;

  constructor(private api: ApiService, private router: Router, private snackBar: MatSnackBar) {
  }

  onEnter(targetURL: string) {
    const token = this.getToken();
    if (token !== null) {
      this.api.logon(token).subscribe((res) => {
        if (res.success) {
          this.setUserData(res.user);
          this.router.navigate([targetURL]);
          this.show.next(true);
        }
      });
    } else {
      this.router.navigate(['/login']);
      this.show.next(false);
    }
  }

  onLogin(username: string, password: string) {
    this.api.login(username, password).subscribe(res => {
      if (res.success) {
        this.setToken(res.token);
        this.show.next(true);
        this.goTo('/');
      } else {
        this.popup('Fehler beim Einloggen!', 'Schliessen');

      }
    });
  }

  onLogout() {
    this.removeToken();
    this.onEnter('/');
  }

  onRegister(username: string, email: string, firstName: string, lastName: string,
             birthday: string, password: string, passwordConfirm: string) {
    this.api.register(username, email, firstName, lastName, birthday, password, passwordConfirm).subscribe((res) => {
      if (res.success) {
        this.onLogin(username, password);
      } else {
        this.popup('Fehler beim Registrieren!', 'Schliessen');
      }
    });
  }

  get showHeader() {
    return this.show.asObservable();
  }

  setToken(token: string) {
    localStorage.setItem('jwt', token);
  }

  getToken() {
    return localStorage.getItem('jwt');
  }

  removeToken() {
    localStorage.removeItem('jwt');
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

  public isloggedIn(): boolean {
    return (this.getToken() !== null);
  }

  popup(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  setUserData(user: User) {
    this.sessionUser = user;
  }
  getUserData(): User {
    return this.sessionUser;
  }
}
