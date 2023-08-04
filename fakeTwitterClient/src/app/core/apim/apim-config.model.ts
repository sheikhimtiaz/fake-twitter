interface OcpApimSubscriptionHeader {
    key: string;
    value: string;
}

export interface ApimConfig {
    protocol: string;
    environment: string;
    subdomain: string;
    domain: string;
    suffix: string;
    saml: string;
    OcpApimSubscriptionHeader: OcpApimSubscriptionHeader;
}
