<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Inicio</title>
<script src="recursos/jquery/jquery-2.4.1.min.js" type="text/javascript"></script>
<script src="recursos/angular/angular.js" type="text/javascript"></script>
<script src="recursos/controller/IndexController.js"></script>
</head>
<body ng-app="App" ng-controller="IndexController">
	<h2 id="titulo">Inicio</h2>
	<a href="welcome.html">Saludar a ...</a>

	<strong>Nombres</strong>
	<ul>
		<li ng-repeat="nombre in lstNombres">{{nombre}}</li>
	</ul>

	<br />
	<strong>Tecnologías</strong>
	<ul>
		<li ng-repeat="tecnologia in lstTecnologias">{{tecnologia}}</li>
	</ul>

	<script>
		$(document).ready(function() {
			$("#titulo").attr('style', 'color: red;');
		});
	</script>
</body>
</html>