import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenStorageService } from "../auth/services/token-storage.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private _tokenService: TokenStorageService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const localToken = this._tokenService.getToken;
        req = req.clone({headers: req.headers.set('Authorization', 'bearer ' + localToken)});
        return next.handle(req);
    }
}