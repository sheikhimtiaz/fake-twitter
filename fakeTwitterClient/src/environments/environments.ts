import { ApimConfig } from "src/app/core/apim/apim-config.model";

export const environment = {
    prodMode: false,
    environment: 'local',
    baseUrl: 'https://localhost:4200',
    console: {
        log: true,
        warn: true,
        traceDebugger: true
    },
    apimConfig: {
        protocol: 'https',
        environment: 'dev',
        subdomain: 'api',
        domain: 'essential-sandbox.com',
        suffix: '',
        saml: 'saml',
        OcpApimSubscriptionHeader: {
            key: 'Ocp-Apim-Subscription-Key',
            value: '469838c4683b4f0083f9386d61caccbc'
        }
    } as ApimConfig
};