var app = angular.module('App', [ ]);

var auth = {};
var logout = function() {
    auth.loggedIn = false;
    auth.authz = null;
    window.location = auth.logoutUrl;
};

angular.element(document).ready(function($http) {
	//Formas de obtener el archivo de configuración de seguridad de keycloak para la aplicación
	//var keycloak = Keycloak('../../WEB-INF/keycloak.json');
	//var keycloak = Keycloak('/recursos/keycloak/keycloak.json');
	//var keycloak = Keycloak('../../keycloak.json');
	var keycloak = Keycloak('http://localhost:8081/SpringWebApp-1/keycloak.json');
	keycloak.init({ onLoad: 'check-sso' }).success(function () { //Con 'check-sso' en teoria se puede verificar que se ha iniciado sesión en la aplicación
        console.log('Ha iniciado sesion');

        auth.loggedIn = true;
        auth.authz = keycloak;
        app.factory('Auth', function() {
           return auth;
        });
        angular.bootstrap(document, ["App"]);
    }).error(function () {
    	alert("Error al iniciar sesi\u00f3n");
    });
});

app.controller('WelcomeController', ['$scope', '$http', function($scope, $http) {
	$scope.lstNombres = [];
	$scope.lstTecnologias = [];
	$scope.lstReinos = [];

    if (auth.authz.idToken) {
    	var ket = auth.authz.idTokenParsed.preferred_username;
    } else {
    	auth.authz.loadUserProfile(function() {
        	var ket = auth.authz.profile.username;
        }, function() {
            console.log('Failed to retrieve user details. Please enable claims or account role');
        });
    }

	//Petición a la misma aplicación
	$http.get('/SpringWebApp-1/obtenerNombres.json').success(function(data) {
		$scope.lstNombres = data;
	});

	//Petición al WS desplegado en el server
	//Aún no funciona por que es necesario el token de autenticación
	var obtenerTecnologias = {
		method: 'GET',
		url: '/SpringWS-1/rest/transaccion/obtenerTecnologias',
		headers: {
			'Access-Control-Allow-Origin': '*',
        	'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        	'Access-Control-Allow-Headers': '*'
		}
	};
	$http(obtenerTecnologias).success(function(data) {
		$scope.lstTecnologias = data;
	}).error(function (data) {
		console.log('Error: ' + data.error);
	});
}]);

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