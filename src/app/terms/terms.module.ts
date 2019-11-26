
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TandpComponent } from './tandp/tandp.component';

const link=[
  {
    path:'',
    component:TandpComponent
  }

]

@NgModule({
  declarations: [TandpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(link)
  ],
  exports:[TandpComponent]

})
export class TermsModule { 
  constructor()
  {
    console.log("this is terms module");
  }
}
