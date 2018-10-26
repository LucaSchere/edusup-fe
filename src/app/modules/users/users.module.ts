import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './pages/users-detail/user-detail.component';
import { UserEditComponent } from './pages/users-edit/user-edit.component';
import { UserRemoveComponent } from './components/user-remove/user-remove.component';
import { SharedModule} from '../../shared/shared.module';
import { UsersRoutingModule} from './users-routing.module';
import { UserRegisterComponent } from './pages/users-register/user-register.component';
import { UserLoginComponent } from './pages/users-login/user-login.component';
import { LoginCardComponent } from './components/login-card/login-card.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
  ],
  declarations: [
    UserDetailComponent,
    UserEditComponent, UserRemoveComponent,
    UserRegisterComponent,
    UserLoginComponent,
    LoginCardComponent,
    LoginCardComponent,
  ]
})
export class UsersModule { }
