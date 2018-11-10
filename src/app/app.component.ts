import {Component, OnInit} from '@angular/core';
import { SessionService } from './core/services/session.service';
import { Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  constructor(private sessionService: SessionService, private router: Router) {
    this.isLoggedIn$ = this.sessionService.showHeader;
  }
  ngOnInit() {
    const temp = this.router.events.subscribe(
      (data: any) => {
        temp.unsubscribe();
        this.sessionService.onEnter(data.url);
      });
  }

}
