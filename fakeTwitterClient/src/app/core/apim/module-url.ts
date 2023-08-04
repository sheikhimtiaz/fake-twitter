export interface ModuleUrl {
    baseUrl: string;
    moduleUrl: string;
    version: string;
    toUrl(url?: string): string;
}

export class ModuleUrl implements ModuleUrl {

    baseUrl: string;
    moduleUrl: string;
    version: string;

    constructor(baseUrl: string, moduleName: string, version?: string) {
        this.baseUrl = baseUrl;
        this.moduleUrl = moduleName;
        this.version = version || '';
    }

    public toUrl(...urlSegments: string[]): string {
        let endpoint = '/';
        if (urlSegments.length > 0) {
            endpoint = endpoint + urlSegments.join('/');
        }
        let url = this.baseUrl + this.moduleUrl + this.version;
        if (url[url.length - 1] !== '/') {
            url = url + endpoint;
        }
        return url;
    }

    public toUrlWithoutEndSlash(...urlSegments: string[]): string {
        let endpoint = '/';
        if (urlSegments.length > 0) {
            endpoint = endpoint + urlSegments.join('/');
        }
        let url = this.baseUrl + this.moduleUrl + this.version;
        return url;
    }

}
