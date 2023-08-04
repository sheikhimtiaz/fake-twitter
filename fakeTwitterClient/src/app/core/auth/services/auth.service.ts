import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";

@Injectable()
export class AuthService {
    private _isAuthenticatedReplay: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
    /**
     * Use only on guards
     * @returns if the user is authenticated as an Observable<boolean>
     */
    public isAuthenticated$: Observable<boolean> = this._isAuthenticatedReplay.asObservable();
}