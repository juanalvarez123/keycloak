var app = angular.module('App', [ ]);

app.controller('IndexController', ['$http', '$scope', function($http, $scope) {
	$scope.username = 'js.alvarez@transportsystems.co';
	$scope.password = '*******';

	//Utilizando la API REST de key cloak se intenta realizar un inicio de sesión SIN utilizar
	//la libreria javascript 'keycloak,js'
	//Tampoco funciona
	$scope.autenticar = function() {

		var peticion = {
				method: 'POST',
				url: 'http://localhost:8080/auth/realms/demo/tokens/grants/access?username=' + $scope.username + '&password=' + $scope.password + '&client_id=keycloak.api&grant_type=password',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
					'Access-Control-Allow-Headers': '*'
				}
		};

		$http(peticion).success(function (data) {
			var respuesta = data;
			var total = respuesta;
		}).error(function (data) {
			console.log('Error: ' + data);
		});
	};

	$scope.options = function() {
		$http({ method: 'OPTIONS', url: 'http://localhost:8080/auth/realms/demo/tokens/grants/access' }).success(function(data) {
			var datos = data;
			var total2 = datos;
		}).error(function(data) {
			console.log('Error: ' + data.error);
		});
	};
}]);

