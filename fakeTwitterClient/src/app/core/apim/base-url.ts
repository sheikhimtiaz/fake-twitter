import { ApimConfig } from "./apim-config.model";

export function baseUrl(apimConfig: ApimConfig) {
    const config = apimConfig;
    return `${config.protocol}://${config.subdomain ? config.subdomain + '.' : ''}${config.environment ? config.environment + '.' : ''}${config.domain}${config.suffix ? '/' + config.suffix : ''}`;
}