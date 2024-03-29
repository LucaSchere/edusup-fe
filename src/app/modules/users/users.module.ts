import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './pages/users-detail/user-detail.component';
import { UserEditComponent } from './pages/users-edit/user-edit.component';
import { SharedModule} from '../../shared/shared.module';
import { UsersRoutingModule} from './users-routing.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
  ],
  declarations: [
    UserDetailComponent,
    UserEditComponent,
  ],
  })
export class UsersModule { }
