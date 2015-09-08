var app = angular.module('App', [ ]);

app.controller('IndexController', ['$scope', '$http', function($scope, $http) {
	$scope.lstNombres = [];
	$scope.lstTecnologias = [];

	$http.get('/SpringWebApp-1/obtenerNombres.json').success(function(data) {
		$scope.lstNombres = data;
	});
	$http.get('/SpringWS-1/rest/transaccion/obtenerTecnologias').success(function(data) {
		$scope.lstTecnologias = data;
	});
}]);