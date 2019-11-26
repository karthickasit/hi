import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProtectGuard implements CanActivate {
  constructor(private r:Router)
  {}
  canActivate(): boolean{

if(localStorage.getItem('tkn'))
{
 this.r.navigate(['/home']);
return true;
}
else 
return false;
  }
  
}
