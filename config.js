const config = {
    redirectUrl: 'com.devfinderfetchapi://devlist',
    clientId: '4fe64420755fe63ff364',
    clientSecret: '1b80a5129ceaff703ffb093a680528ca008de2a8',
    scopes: ['identity' ],
    serviceConfiguration: {
        authorizationEndpoint: 'https://github.com/login/oauth/authorize',
        tokenEndpoint: 'https://github.com/login/oauth/access_token',
        revocationEndpoint: 'https://github.com/settings/connections/applications/4fe64420755fe63ff364'
    }
};

export default config;
