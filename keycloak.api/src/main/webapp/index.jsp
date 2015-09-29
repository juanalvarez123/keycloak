<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html ng-app="App">
	<head>
		<meta charset="utf-8"></meta>
		<title>keycloak.api</title>
	    <script src="resources/js/angular/angular.js"></script>
	    <script src="resources/js/angular/angular-resource.js"></script>
	    <script src="resources/js/angular/angular-route.js"></script>
	    <script src="resources/js/angular/ui-bootstrap-tpls-0.4.0.js"></script>
	    <script src="resources/js/controllers/IndexController.js" type="text/javascript"></script>
	    <link href="resources/bootstrap/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
	    <link href="resources/bootstrap/css/bootstrap-theme.min.css" type="text/css" rel="stylesheet" />
	</head>
	<body ng-controller="IndexController" class="bg-info">
		<div class="container">
			<div style=" float: none; margin: 0 auto; padding-top: 100px;" class="col-md-4">
		        <h1>keycloak.api</h1>
				<div class="form-group">
				<input type="text" placeholder="usuario" ng-model="username" class="form-control" />
				</div>
				<div class="form-group">
				<input type="password" placeholder="clave" ng-model="password" class="form-control" />
				</div>
				<input type="button" value="Ingresar" ng-click="autenticar()" class="btn btn-success" />
				<div class="form-group">
					<h3>Verificar options</h3>
					<input type="button" value="Options" ng-click="options()" class="btn btn-info">
	    		</div>
    		</div>
   		</div>
	</body>
</html>
