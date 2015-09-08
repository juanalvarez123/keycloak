package com.logica.controlador;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class Modelo {

	@RequestMapping("/welcome")
	public ModelAndView inicio() {
		String nombre = "Juan Sebastian";
		return new ModelAndView("welcome", "nombre", nombre);
	}

	@RequestMapping(value = "/obtenerNombres", method = RequestMethod.GET)
	public @ResponseBody List<String> obtenerNombres() {
		List<String> lstNombres = new ArrayList<String>();
		lstNombres.add("Angie Dayana");
		lstNombres.add("Nathalia Vanessa");
		lstNombres.add("Santiago Alvarez");
		return lstNombres;
	}

}