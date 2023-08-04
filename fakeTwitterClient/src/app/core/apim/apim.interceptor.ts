import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApimConfigurationsService } from './apim-configurations.service';

@Injectable()
export class HttpApimInterceptor implements HttpInterceptor {

    constructor(private _apimConfigService: ApimConfigurationsService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // Skip Interceptor
        if (request.headers.has('SkipSubsKeyInterceptor')) {
            const headers = request.headers.delete('SkipSubsKeyInterceptor');
            return next.handle(request.clone({ headers }));
        }

        // Allow subscription key only for APIM
        if (request.url.startsWith(this._apimConfigService.baseUrl)) {
            const clonedRequest = request.clone({ setHeaders: this.getApimHeaders() });
            return next.handle(clonedRequest);
        }

        return next.handle(request);
    }

    getApimHeaders(): any {
        const header: Map = {};
        header[this._apimConfigService.config.OcpApimSubscriptionHeader.key] = this._apimConfigService.config.OcpApimSubscriptionHeader.value;
        return header;
    }
}

interface Map {
    [key: string]: string | undefined
}