import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../../core/services/session.service';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  sessionUser: User;
  constructor(public sessionService: SessionService) {
    this.sessionUser = new User(0, '', '', '', '', '');
  }

  ngOnInit() {
    this.sessionUser = new User(0, '', '', '', '', '');
    this.sessionUser = this.sessionService.getUserData();
  }

}
