import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthorizationService) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {      
    return this.authService.isAuthorized();
  }
  
}
