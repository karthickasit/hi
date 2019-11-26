import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntGuard implements CanActivate {
  canActivate()
   {
    if(localStorage.getItem("tkn"))
    return true;
    else{
      alert("not allowed");
    }
  }
  
}
