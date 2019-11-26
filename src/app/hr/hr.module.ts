import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesComponent } from './services/services.component';
import { AttendanceComponent } from './attendance/attendance.component';

const hrlinks=[
  {
    path:'hr',
    component:DashboardComponent,
    children:[
      {
        path:'services',
        component:ServicesComponent
      },
      {
        path:'attendance',
        component:AttendanceComponent
      }
    ]
  }
]

@NgModule({
  declarations: [DashboardComponent, ServicesComponent, AttendanceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(hrlinks)
  ]
})
export class HrModule { 
  constructor()
  {
    console.log("hr module");
  }
}
