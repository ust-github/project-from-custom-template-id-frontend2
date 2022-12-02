const env = (<any>window).edgeops_env || {};

export const environment = {
    production: false,
    apiUrl: `/project_from_custom_template_id-backend2/api`,
    keycloakParams: Object.assign(
        {},
        {
            enable: true,
            url: 'https://keycloak.dagility.com/auth',
            realm: 'Edgeops-Dev',
            clientId: 'Edgeops-ui',
            'ssl-required': 'external',
            'public-client': true,
        },
        env.keycloak
    ),
};
