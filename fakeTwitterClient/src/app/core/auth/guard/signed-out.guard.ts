import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
    providedIn: 'root'
})
export class SignedOutGuard {

    constructor(
        private _router: Router,
        private _authService: AuthService,
        private tokenService: TokenStorageService,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        console.log("Signed out Guard!");

        const localToken = this.tokenService.getToken();
        this._authService.setLoggedInStatus(true, localToken);
        return this._authService.token$.pipe(
          distinctUntilChanged(),
            map((token) => {
              if (token) {
                this._router.navigateByUrl('/home');
                return false;
              } else {
                return true;
              }
            })
          );
    }
}
