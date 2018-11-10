import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionService } from './services/session.service';
import { ApiService} from './services/api.service';


@NgModule({
  imports: [
    CommonModule,
    SessionService,
    ApiService,
  ],
  declarations: [],
})
export class CoreModule { }
