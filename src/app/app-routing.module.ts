import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Error404Component} from './shared/pages/error404/error404.component';
import {DashboardComponent} from './shared/pages/dashboard/dashboard.component';
import {AppConfig} from './configs/app.config';

const routes: Routes = [
  {path: '', component: DashboardComponent, pathMatch: 'full'},
  {path: AppConfig.routes.dashboard, redirectTo: '/'},
  {path: AppConfig.routes.error404, component: Error404Component},
  {path: AppConfig.routes.user, loadChildren: './modules/users/users.module#UsersModule'},

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
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
