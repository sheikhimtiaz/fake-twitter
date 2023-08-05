import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, ReplaySubject, distinctUntilChanged } from "rxjs";
import { LoginRequest, TweetLiveService } from "src/app/@api/fakeTwitter";
import { TokenStorageService } from "./token-storage.service";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private isLoggedIn = false;
    private isLoggedSubject = new BehaviorSubject<boolean | null>(null);;
    private tokenSubject = new BehaviorSubject<string | null>(null);
  
    constructor(
        private _router: Router,
        private _tweetLiveService: TweetLiveService,
        private _tokenService: TokenStorageService,
    ) { 
    }

    public token$ = this.tokenSubject.asObservable();
    public auth$ = this.isLoggedSubject.asObservable();
  
    public isAuthenticated(): boolean {
      return this.isLoggedIn;
    }
  
    public setLoggedInStatus(status: boolean, token: string | null): void {
      this.isLoggedIn = status;
      this.isLoggedSubject.next(status);
      this.tokenSubject.next(token); 
    }

    public login(value: LoginRequest) {
        this._tweetLiveService.login(value).subscribe(res => {
            const response = JSON.parse(res);
            if(response.token) {
                this._tokenService.saveToken(response.token);
                this.setLoggedInStatus(true, response.token);
                this._router.navigateByUrl("/home");
            }
        })
    }

    public logout() {
        this._tokenService.signOut();
        this.setLoggedInStatus(false, null);
        this._router.navigateByUrl("/user/login");
    }
  

}