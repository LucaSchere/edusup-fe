import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailComponent} from './pages/users-detail/user-detail.component';
import {UserEditComponent} from './pages/users-edit/user-edit.component';
import {UserLoginComponent} from './pages/users-login/user-login.component';
import {UserRegisterComponent} from './pages/users-register/user-register.component';
import { AppConfig } from '../../configs/app.config';

const routes: Routes = [
  {path: '', component: UserDetailComponent},
  {path: AppConfig.routes.users.edit, component: UserEditComponent},
  {path: AppConfig.routes.users.login, component: UserLoginComponent},
  {path: AppConfig.routes.users.register, component: UserRegisterComponent},
  {path: AppConfig.routes.users.detail, redirectTo: ''},

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class UsersRoutingModule {
}
