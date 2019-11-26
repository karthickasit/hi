import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { GridlayoutComponent } from './gridlayout/gridlayout.component';


const routes: Routes = [
                        {path:"register", component: RegisterComponent},
                        {path:"grid", component: GridlayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
