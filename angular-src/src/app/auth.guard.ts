import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { EmartService } from './emart/emart.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate { 
  constructor(protected user: EmartService,private router:Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      const userExist = !!this.user.isLoggedIn();
      if(userExist){
        return true;
      }
      else{
        this.router.navigate(['/']);
        return false;
      }
    }
}




