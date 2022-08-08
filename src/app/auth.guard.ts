import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // a= 0; b=0;
  userToken = false;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      // this.a=100; this.b= 20;
      // call an HTTP call to backend api and get auth token for user
      this.userToken = true
      if(this.userToken){
        return true
      }
      else{
        return false; 
      }
  }
  
}
