import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';

const link=[
  {
    path:'login',
    component:SigninComponent
  }
]

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(link),
    ReactiveFormsModule
  ]
})
export class LoginModule {
  constructor()
  {
    console.log("this is login module");
  }
 }
