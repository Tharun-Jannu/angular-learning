import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverGuard implements Resolve<any> {

  //we will have a service - call service API to get data
  /* 
    this.userservice.getaccountinfo(userid).subscribe(data=>{

    })
   */

  userObj= {
    userId: 5, username:'tharun'
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   return this.userObj
  }  
}
