import { UserComponent } from './user/user.component';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<UserComponent> {
  canDeactivate():  boolean  {
   if( confirm("r u sure to exit from this route?"))
    return true;
    else return false;
  }
  
}
