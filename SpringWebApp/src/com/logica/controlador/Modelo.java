package com.logica.controlador;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.core.MediaType;

import org.keycloak.adapters.ServerRequest;
import org.keycloak.representations.AccessTokenResponse;
import org.keycloak.representations.IDToken;
import org.keycloak.servlet.ServletOAuthClient;
import org.keycloak.servlet.ServletOAuthClientBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class Modelo {

    private ServletOAuthClient client;

	@Autowired
	ServletContext context;

	//@Autowired(required = true)
	//private HttpServletRequest request;

    @SuppressWarnings("static-access")
	@RequestMapping("/welcome")
	public ModelAndView inicio(HttpServletRequest request, HttpServletResponse response) throws ServerRequest.HttpFailure, IOException {
		String nombre = "Juan Sebastian";
		/*client = new ServletOAuthClient();
        configureClient();
        context.setAttribute(ServletOAuthClient.class.getName(), client);
        AccessTokenResponse atr = client.getBearerToken(request);
		IDToken token = client.extractIdToken(atr.getToken());*/
		return new ModelAndView("welcome", "nombre", nombre);
	}

	/*private void configureClient() {
        InputStream is = null;
        //String path = context.getInitParameter("keycloak.config.file");
        String path = null;
        if (path == null) {
            is = context.getResourceAsStream("/WEB-INF/keycloak.json");
        } else {
            try {
                is = new FileInputStream(path);
            } catch (FileNotFoundException e) {
                throw new RuntimeException(e);
            }
        }

        client = ServletOAuthClientBuilder.build(is);
    }*/

	//@RequestMapping(value = "/obtenerNombres", method = RequestMethod.GET)
	@RequestMapping(value = "/obtenerNombres", produces = MediaType.APPLICATION_JSON)
	public @ResponseBody List<String> obtenerNombres() {
	//public @ResponseBody String obtenerNombres() {
		List<String> lstNombres = new ArrayList<String>();
		lstNombres.add("Angie Dayana");
		lstNombres.add("Nathalia Vanessa");
		lstNombres.add("Santiago Alvarez");
		return lstNombres;
		//return "Hola mundo";
	}

	@RequestMapping("/accessDenegate")
	public ModelAndView cargarAccesoDenegado() {
		return new ModelAndView("accessDenegate");
	}

	@RequestMapping(value = "/keycloak")
	public void getKeycloak() {
		//No hacer nada,
		String hola = "Hola mundo";
	}

}