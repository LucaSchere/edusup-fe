import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Error404Component} from './shared/pages/error404/error404.component';
import {DashboardComponent} from './shared/pages/dashboard/dashboard.component';
import {AppConfig} from './configs/app.config';
import { AuthGuard } from './core/services/auth.guard';
import {CalculatorComponent} from './shared/pages/calculator/calculator.component';
import { UsersModule } from './modules/users/users.module';
import {LoginComponent} from './shared/pages/login/login.component';
import {RegisterComponent} from './shared/pages/register/register.component';
import {SessionService} from './core/services/session.service';

const routes: Routes = [
  {path: '', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: AppConfig.routes.dashboard, redirectTo: '/', canActivate: [AuthGuard]},
  {path: AppConfig.routes.error404, component: Error404Component, canActivate: [AuthGuard]},
  {path: AppConfig.routes.user, loadChildren: () => UsersModule, canActivate: [AuthGuard]},
  {path: AppConfig.routes.calculator, component: CalculatorComponent, canActivate: [AuthGuard]},
  {path: AppConfig.routes.login, component: LoginComponent},
  {path: AppConfig.routes.register, component: RegisterComponent},

  // otherwise redirect to 404
  {path: '**', redirectTo: '/' + AppConfig.routes.error404}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  providers: [
    SessionService, AuthGuard
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
