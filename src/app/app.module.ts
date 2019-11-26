//import { TermsModule } from './terms/terms.module';
import { ExitGuard } from './exit.guard';
import { DashboardModule } from './dashboard/dashboard.module';
import { ExistComponent } from './exist/exist.component';
import { DeactGuard } from './deact.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { GridlayoutComponent } from './gridlayout/gridlayout.component';
import { MouseDirective } from './mouse.directive';
import { CubePipe } from './cube.pipe';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ErrComponent } from './err/err.component';

import { EntGuard } from './ent.guard';
import { ProtectGuard } from './protect.guard';
import { NewComponent } from './new/new.component';
import { ToysComponent } from './toys/toys.component';
import { DetailsComponent } from './details/details.component';
//import { TermsModule } from './terms/terms.module';
import { InterceptService } from './intercept.service';
import { LoginModule } from './login/login.module';
import { HrModule } from './hr/hr.module';
import { DashboardComponent } from './hr/dashboard/dashboard.component';

const mypaths:Routes=[
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
    },
 
{
path:'home',
component:HomeComponent
},
{
path:'hr',
component:DashboardComponent
},


{
path:'terms',
loadChildren:()=>import ('./terms/terms.module').then (m=>m.TermsModule)
},
{
  path:'aboutus',
  loadChildren:()=>import ('./aboutus/aboutus.module').then (m=>m.AboutusModule)
  },
{
  path:'toys',
  component:ToysComponent
  },
  {
    path:'details/:dynamicno',
    component:DetailsComponent
    },
{
path:'user',
component:UserComponent,
canDeactivate:[ExitGuard],
// canActivate:[EntGuard],
children:[
  {
    path:'exist',
    component:ExistComponent
  },
  {
    path:'new',
    component:NewComponent
  }
]
},
{
  path:'**', //wildcard route
  component:ErrComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    GridlayoutComponent,
    MouseDirective,
    CubePipe,
    ExistComponent,
    NewComponent,
    HomeComponent,
    UserComponent,
    ErrComponent,
    ToysComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot(mypaths),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginModule,
    HrModule,
    DashboardModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InterceptService,
      multi:true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor()
  {
    console.log("this is app module")
  }
}
