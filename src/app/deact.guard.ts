import { UserComponent } from './user/user.component';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeactGuard implements CanDeactivate<UserComponent> {
  canDeactivate():  boolean  {
    confirm("r u sure to exit away");
    return true;
  }
  
}
