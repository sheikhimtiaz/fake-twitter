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
        
        return this._authService.isAuthenticated$
            .pipe(
                distinctUntilChanged(),
                map((isAuthorized: boolean) => {
                    if (!isAuthorized) {
                        this._router.navigateByUrl('');
                        return false;
                    }
                    return true;
                })
            );
    }
}
