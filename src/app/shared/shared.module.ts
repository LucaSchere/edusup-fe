import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { Error404Component } from './pages/error404/error404.component';
import { MaterialModule } from './modules/material.module';
import { NavComponent} from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { LoginComponent } from './pages/login/user-login.component';
import { RegisterComponent } from './pages/users-register/user-register.component';
import { TestComponent } from './pages/test/test.component';


@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    LayoutModule,
    RouterModule

  ],
  declarations: [
    DashboardComponent,
    Error404Component,
    NavComponent,
    CalculatorComponent,
    LoginComponent,
    LoginCardComponent,
    RegisterComponent,
    TestComponent,
  ],
  exports: [
    DashboardComponent,
    Error404Component,
    NavComponent,
    MaterialModule,
    LayoutModule,
    LoginComponent,
    LoginCardComponent,
    RegisterComponent,


]
})
export class SharedModule { }
