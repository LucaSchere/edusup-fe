import {Component, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AppConfig} from '../../../configs/app.config';
import {SessionService} from '../../../core/services/session.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  title: string;
  isLoggedIn$: Observable<boolean>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private sessionService: SessionService) {
    this.title = AppConfig.title;
    this.isLoggedIn$ = this.sessionService.showHeader;
  }

  onLogout() {
    this.sessionService.onLogout();
  }
}
