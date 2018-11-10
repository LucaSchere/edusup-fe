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
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ParticlesModule } from 'angular-particle';
import { RegisterCardComponent } from './components/register-card/register-card.component';
import { AmazingTimePickerModule } from 'amazing-time-picker-angular6';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    LayoutModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ParticlesModule,
    AmazingTimePickerModule,
  ],
  declarations: [
    DashboardComponent,
    Error404Component,
    NavComponent,
    CalculatorComponent,
    LoginComponent,
    LoginCardComponent,
    RegisterComponent,
    RegisterCardComponent,
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
    AmazingTimePickerModule,


]
})
export class SharedModule { }
