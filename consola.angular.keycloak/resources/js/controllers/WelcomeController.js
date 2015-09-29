var app = angular.module('App', [ ]);

/* Usuario autenticado:
 * authServerUrl: "http://localhost:8080/auth"
 * authenticated: true
 * callback_id: 0
 * clientId: "security-admin-console"
 * clientSecret: undefined
 * idToken: "eyJhbGciOiJSUzI1NiJ9.eyJ...RRFituiBP22NASkyAI2-YrA"
 * idTokenParsed: Object {
 *     aud: "security-admin-console"
 *     azp: "security-admin-console"
 *     email: "js.alvarez@transportsystems.co"
 *     exp: 1443455321
 *     family_name: "Alvarez Eraso"
 *     given_name: "Juan Sebastian"
 *     iat: 1443455261
 *     iss: "http://localhost:8080/auth/realms/master"
 *     jti: "121825de-f178-479d-8de9-418dd0c9bb57"
 *     name: "Juan Sebastian Alvarez Eraso"
 *     nbf: 0
 *     preferred_username: "admin"
 *     session_state: "f9d410d8-c321-4625-b168-8e8922df7f94"
 *     sub: "db2957af-59eb-4978-bf3a-d1c668454589"
 *     }
 * loginRequired: true
 * realm: "master"
 * realmAccess: Object { roles=[2]}
 * refreshToken: "eyJhbGciOiJSUzI1NiJ9.eyJ...t4mUGHJCfPOT61z5Vf_4h_g"
 * refreshTokenParsed: Object { jti="82091647-bac9-4f54-9842-fab1de23057b",  exp=1443456052,  nbf=0,  more...}
 * resourceAccess: Object { master-realm={...},  demo-realm={...},  account={...}}
 * sessionId: "master/db2957af-59eb-497...-4625-b168-8e8922df7f94"
 * subject: "db2957af-59eb-4978-bf3a-d1c668454589"
 * timeSkew: 0
 * token: "eyJhbGciOiJSUzI1NiJ9.eyJ...voemcV6tykmkL9TIFOHBc1w"
 * tokenParsed: Object { jti="12e103bd-3c46-4ca1-a5c9-b1a7804e8c07",  exp=1443454312,  nbf=0,  more...}
 * accountManagement: function()
 * clearToken: function()
 * createAccountUrl: function(options)
 * createLoginUrl: function(options)
 * createLogoutUrl: function(options)
 * hasRealmRole: function(role)
 * hasResourceRole: function(role, resource)
 * init: function(initOptions)
 * isTokenExpired: function(minValidity)
 * loadUserInfo: function()
 * loadUserProfile: function()
 * login: function(options)
 * logout: function(options)
 * updateToken: function(minValidity)
 * */
var auth = {};

var logout = function() {
    auth.loggedIn = false;
    auth.authz = null;
    window.location = auth.logoutUrl;
};

angular.element(document).ready(function ($http) {
    var keycloakAuth = Keycloak('http://localhost:8081/angular.keycloak/keycloak.json');
    auth.loggedIn = false;

    keycloakAuth.init({ onLoad: 'login-required' }).success(function () { //Inicio de login automático
    //keycloakAuth.init({ onLoad: 'check-sso' }).success(function () { //Verificación de inicio de sesión
        console.log('Inicia sesión');
        auth.loggedIn = true;
        auth.authz = keycloakAuth;
        app.factory('Auth', function() {
           return auth;
       });
        angular.bootstrap(document, ["App"]);
    }).error(function () {
    	alert("Error al iniciar sesión");
    });
});

app.controller('WelcomeController', function($scope, $http) {
	$scope.auth = auth;
	$scope.reinoSeleccionado = 'master';
	$scope.reinoMaster = 'master';

	/* Para los reinos:
	 * accessCodeLifespan: 60
	 * accessCodeLifespanLogin: 1800
	 * accessCodeLifespanUserAction: 300
	 * accessTokenLifespan: 60
	 * accountTheme: null
	 * adminEventsDetailsEnabled: false
	 * adminEventsEnabled: false
	 * adminTheme: null
	 * applicationScopeMappings: null
	 * applications: null
	 * authenticationFlows: null
	 * authenticatorConfig: null
	 * browserFlow: "browser"
	 * browserSecurityHeaders: Object { contentSecurityPolicy="frame-src 'self'",  xFrameOptions="SAMEORIGIN"}
	 * bruteForceProtected: false / true
	 * certificate: "MIICmzCCAYMCBgFP0tyQ7TAN...U9SePEFWDNmyNXO2HOOuig="
	 * clientAuthenticationFlow: "clients"
	 * clientScopeMappings: null
	 * clients: null
	 * codeSecret: null
	 * defaultLocale: null
	 * defaultRoles: null
	 * directGrantFlow: "direct grant"
	 * editUsernameAllowed: false
	 * emailTheme: null
	 * enabled: true / false
	 * enabledEventTypes: []
	 * eventsEnabled: false
	 * eventsExpiration: null
	 * eventsListeners: ["jboss-logging"]
	 * failureFactor: 30
	 * id: "master"
	 * identityFederationEnabled: false
	 * identityProviderMappers: null
	 * identityProviders: null
	 * internationalizationEnabled: false / true
	 * loginTheme: null
	 * maxDeltaTimeSeconds: 43200
	 * maxFailureWaitSeconds: 900
	 * minimumQuickLoginWaitSeconds: 60
	 * notBefore: 1442685326
	 * oauthClients: null
	 * otpPolicyAlgorithm: "HmacSHA1"
	 * otpPolicyDigits: 6
	 * otpPolicyInitialCounter: 0
	 * otpPolicyLookAheadWindow: 1
	 * otpPolicyPeriod: 30
	 * otpPolicyType: "totp"
	 * passwordCredentialGrantAllowed: null
	 * passwordPolicy: null
	 * privateKey: null
	 * protocolMappers: null
	 * publicKey: "MIIBIjANBgkqhkiG9w0BAQEF...emZvLqAdJDu5hT8QQIDAQAB"
	 * quickLoginCheckMilliSeconds: 1000
	 * realm: "master"
	 * realmCacheEnabled: null
	 * registrationAllowed: false / true
	 * registrationEmailAsUsername:	false / true
	 * registrationFlow: "registration"
	 * rememberMe: false
	 * requiredActions: null
	 * requiredCredentials: ["password"]
	 * resetCredentialsFlow: "reset credentials"
	 * resetPasswordAllowed: false / true
	 * roles: null
	 * scopeMappings: null
	 * smtpServer: Object {}
	 * social: null
	 * socialProviders: null
	 * sslRequired: "external"
	 * ssoSessionIdleTimeout: 1800
	 * ssoSessionMaxLifespan: 36000
	 * supportedLocales: []
	 * updateProfileOnInitialSocialLogin: null
	 * userCacheEnabled: null
	 * userFederationMappers: null
	 * userFederationProviders: null
	 * users: null
	 * verifyEmail: false
	 * waitIncrementSeconds: 60
	 * */
	$scope.reinos = {};

	/* Para los clientes:
	 * adminUrl:
	 * attributes: Object { saml.multivalued.roles="false",  saml.encrypt="false",  saml.server.signature="false",  more...}
	 * baseUrl:
	 * bearerOnly: true / false
	 * clientAuthenticatorType: "client-secret" ...
	 * clientId:
	 * consentRequired
	 * defaultRoles
	 * directGrantsOnly: true / false
	 * enabled: true / false
	 * frontchannelLogout: true / false
	 * fullScopeAllowed: true / false
	 * id: "84c9613f-4548-4f09-992a-dfce6df52767"
	 * name:
	 * nodeReRegistrationTimeout:
	 * notBefore
	 * protocol: "openid-connect"
	 * protocolMappers: [Object { id="b014585e-7419-453f-946f-fb65220b61dc",  name="email",  protocol="openid-connect",  more...}, Object { id="859befe8-7635-4963-ba85-e5716b4518f6",  name="username",  protocol="openid-connect",  more...}, Object { id="538316ef-934d-4ca6-b68e-4d1bd54eee5d",  name="full name",  protocol="openid-connect",  more...}, 3 more...]
	 * publicClient: true / false
	 * redirectUris: ["http://localhost:8081/angular.keycloak/*", "/auth/admin/master/console/*"]
	 * registeredNodes:
	 * secret:
	 * serviceAccountsEnabled: true / false
	 * surrogateAuthRequired
	 * webOrigins: ["http://localhost:8080", "http://localhost:8081"]
	 * */
	$scope.clientes = {};

	/* Para los usuarios:
	 * pplicationRoles:
	 * attributes:
	 * clientConsents:
	 * clientRoles:
	 * createdTimestamp:
	 * credentials:
	 * email:
	 * emailVerified:
	 * enabled: true / false
	 * federatedIdentities:
	 * federationLink:
	 * firstName:
	 * id: "db2957af-59eb-4978-bf3a-d1c668454589"
	 * lastName:
	 * realmRoles:
	 * requiredActions: []
	 * self:
	 * serviceAccountClientId:
	 * socialLinks:
	 * totp:
	 * username: "admin"
	 * */
	$scope.usuarios = {};

	//Petición al API de keycloak
	$http.get('http://localhost:8080/auth/admin/realms').success(function(data) {
		$scope.reinos = data;
	}).error(function(data) {
		console.log('Error: ' + data);
	});

	$scope.cargarDatos = function(reino) {
		//Petición al API de keycloak
		$http({ method: 'GET', url: 'http://localhost:8080/auth/admin/realms/' + reino + '/clients', headers: { 'Content-Type': 'application/json' } }).success(function(data) {
			$scope.clientes = data;
		}).error(function(data) {
			console.log('Error: ' + data);
		});

		//Petición al API de keycloak
		$http.get('http://localhost:8080/auth/admin/realms/' + reino + '/users').success(function(data) {
			$scope.usuarios = data;
		}).error(function(data) {
			console.log('Error: ' + data);
		});
	};

	$scope.cargarDatos($scope.reinoMaster);
});

app.factory('authInterceptor', function($q, Auth) {
    return {
        request: function (config) {
            var deferred = $q.defer();
            if (Auth.authz.token) {
                Auth.authz.updateToken(5).success(function() {
                    config.headers = config.headers || {};
                    config.headers.Authorization = 'Bearer ' + Auth.authz.token;

                    deferred.resolve(config);
                }).error(function() {
                        deferred.reject('Failed to refresh token');
                });
            }
            return deferred.promise;
        }
    };
});

app.config(function($httpProvider) {
    $httpProvider.responseInterceptors.push('errorInterceptor');
    $httpProvider.interceptors.push('authInterceptor');
});

app.factory('errorInterceptor', function($q) {
    return function(promise) {
        return promise.then(function(response) {
            return response;
        }, function(response) {
            if (response.status == 401) {
                console.log('session timeout?');
                logout();
            } else if (response.status == 403) {
            	//alert("Forbidden");
            	console.log('Forbidden');
            } else if (response.status == 404) {
                //alert("Not found");
            	console.log('Not found');
            } else if (response.status) {
                if (response.data && response.data.errorMessage) {
                    //alert(response.data.errorMessage);
                	console.log('Error: ' + response.data.errorMessage);
                } else {
                    //alert("An unexpected server error has occurred");
                    console.log("An unexpected server error has occurred");
                }
            }
            return $q.reject(response);
        });
    };
});