<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>SpringWebApp</title>

	    <script src="recursos/angular/angular.js"></script>
	    <script src="recursos/angular/angular-resource.js"></script>
	    <script src="recursos/angular/angular-route.js"></script>
	    <script src="recursos/angular/ui-bootstrap-tpls-0.4.0.js"></script>

	    <script src="recursos/controller/WelcomeController.js"></script>

	    <script src="recursos/keycloak/keycloak.js" type="text/javascript"></script>
	    <script src="recursos/jquery/jquery-2.4.1.min.js" type="text/javascript"></script>
	</head>
	<body ng-app="App" ng-controller="WelcomeController">
		<h2 id="titulo">${nombre} ha iniciado sesión con exito</h2>

		<br />
		<strong>Usuarios del sistema (Spring)</strong>
		<ul>
			<li ng-repeat="nombre in lstNombres">{{nombre}}</li>
		</ul>

		<br />
		<strong>Tecnologías (WS)</strong>
		<ul>
			<li ng-repeat="tecnologia in lstTecnologias">{{tecnologia}}</li>
		</ul>

		<br />
		<a href="http://localhost:8080/auth/realms/demo/tokens/logout?redirect_uri=http://localhost:8081/SpringWebApp-1/">Cerrar sesión</a>
	</body>
</html>