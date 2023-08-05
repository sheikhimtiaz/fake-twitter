import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {

    constructor(
        private _router: Router,
        private _authService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        console.log("Guard!");

        const localToken = localStorage.getItem("ftToken");
        this._authService.setLoggedInStatus(true, localToken);
        return this._authService.auth$.pipe(
            map((token) => {

              const isLoggedIn = !!token;
                console.log(token);
                
              if (isLoggedIn) {
                return true;
              } else {
                this._router.navigateByUrl('user/login');
                return false;
              }
            })
          );
    }
}
