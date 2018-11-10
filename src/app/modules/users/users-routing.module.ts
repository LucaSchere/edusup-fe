import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailComponent} from './pages/users-detail/user-detail.component';
import {UserEditComponent} from './pages/users-edit/user-edit.component';
import { AppConfig } from '../../configs/app.config';
import { AuthGuard} from '../../core/services/auth.guard';

const routes: Routes = [
  {path: '', component: UserDetailComponent},
  {path: AppConfig.routes.users.edit, component: UserEditComponent},
  {path: AppConfig.routes.users.detail, redirectTo: ''}

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [
    AuthGuard
  ],
  exports: [
    RouterModule
  ]
})

export class UsersRoutingModule {
}
