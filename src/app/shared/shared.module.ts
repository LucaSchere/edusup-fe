import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { Error404Component } from './pages/error404/error404.component';
import { MaterialModule } from './modules/material.module';
import { NavComponent} from './components/nav/nav.component';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    LayoutModule,
    RouterModule,
  ],
  declarations: [
    DashboardComponent,
    Error404Component,
    NavComponent,
  ],
  exports: [
    DashboardComponent,
    Error404Component,
    NavComponent,
    MaterialModule,
    LayoutModule

]
})
export class SharedModule { }
