# Proyectos-keycloak

En el presente repositorio se encuentran 5 proyectos configurados para realizar la autenticación y autorización con keycloak.

# keycloak

Es un sistema integrado de SSO y IDM para aplicaciones web y servicios web RESTFull construido con los estándares y especificaciones OAuth 2.0 y OpenID Connect, JSON WebToken y SAML.

# Proyectos

### consola.angular.keycloak

Aplicación construida con HTML + Angular JS que hace uso de la librería keycloak.js para acceder al servidor de autenticación y autorización.

Este proyecto utiliza la API REST proporcionada por keycloak para realizar la administración de reinos, clientes, usuarios, etc.

### ejemplo.keycloak

Aplicación web JAVA construida como un proyecto web dinámico con Maven 3.0 que utiliza el adaptador de keycloak en el archivo web.xml de la aplicación para administrar la seguridad.

< login-config >
    < auth-method >
        KEYCLOAK …

### keycloak.api

Aplicación web JAVA construida como un proyecto dinámico con Maven 3.0. Utiliza el método http://keycloak-server/auth/realms/demo/tokens/grants/access para realizar el inicio de sesión “directo” en el servidor de autenticación.
NOTA: keycloak no recomienda usar este método debido a que se pierden características como el SSO.

### SpringWebApp

Aplicación web JAVA construida con Spring MVC + Maven 3.0 + Angular JS. Se encuentra configurada con el servidor de autenticación en el archivo web.xml y utiliza la librería keycloak.js para verificar al usuario autenticado en la aplicación.
La aplicación utiliza recursos JAVA propios del proyecto y consume el servicio web SpringWS con Anguar JS.

### SpringWS

Servicio web JAVA construido con Spring + Jersey + Maven 3.0.
Este servicio se encuentra configurado en keycloak y solo es accesible mediante el “token” de un usuario registrado y autenticado en las aplicaciones.

# Configuración

1. Descargar keycloak y descomprimirlo. URL Descarga: http://keycloak.jboss.org/keycloak/downloads

2. Descargar el servidor de aplicaciones. Puede ser JBoss AS 7.1 o Apache Tomcat 8.0

3. Configurar el adaptador para el servidor de aplicaciones. URL Descarga: http://keycloak.jboss.org/keycloak/downloads.html?dir=0%3Dadapters%3B. URL Manual adaptadores: http://keycloak.github.io/docs/userguide/html/ch08.html

4. Desplegar los proyectos en el servidor de aplicaciones en: Apache Tomcat 8.0: apache-tomcat-8.0.24/webapps/ ó en JBoss AS: jboss-as-7.1.1.Final/standalone/deployments/

5. Iniciar el servidor de aplicaciones

6. Iniciar el servidor keycloak, se ejecuta desde línea de comandos:
> ./keycloak-1.5.0.Final/bin/standalone.sh

7. En este momento se tendrían los 2 servidores, el de aplicaciones y el de autenticación, corriendo:

http://localhost:8080/auth → keycloak server

http://localhost:8081/ → Apache Tomcat o JBoss AS

# Recursos

Documentos oficiales keycloak: http://keycloak.jboss.org/docs

Guia de uso keycloak: http://keycloak.github.io/docs/userguide/html/index.html

API REST keycloak: http://keycloak.github.io/docs/rest-api/overview-index.html 

Implementaciones SSO: https://en.wikipedia.org/wiki/List_of_single_sign-on_implementations
