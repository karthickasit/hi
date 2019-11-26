import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';

const links=[
  {
    path:'dashboard',
    component:HomeComponent,
    children:[
      {
        path:'employees',
        component:EmployeesComponent
      }
    ]
  }
]

@NgModule({
  declarations: [HomeComponent, EmployeesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(links)
  ]
})
export class DashboardModule { }
