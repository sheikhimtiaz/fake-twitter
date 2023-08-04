import { Injectable, Inject } from '@angular/core';
import { ApimConfig } from './apim-config.model';
import { baseUrl } from './base-url';

@Injectable()
export class ApimConfigurationsService {

    private _config: ApimConfig;

    constructor(
        @Inject('apimConfig') private apimConfig: ApimConfig
    ) {
        this._config = this.apimConfig;
    }

    public get config(): ApimConfig {
        return this._config;
    }

    public get baseUrl(): string {
        return baseUrl(this._config);
    }

    public get samlUrl(): string {
        return `${this.config.protocol}://${this.config.environment ? this.config.environment + '.' : ''}${this.config.domain}/auth/login${this.config.suffix ? '/' + this.config.suffix : ''}`;
    }
}
