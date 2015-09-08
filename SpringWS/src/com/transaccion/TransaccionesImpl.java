package com.transaccion;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class TransaccionesImpl implements ITransacciones {

	@Override
	public String obtenerRespuesta() {
		return "Saludar a Juan Sebastian";
	}

	@Override
	public List<String> obtenerTecnologias() {
		List<String> lstTecnologias = new ArrayList<String>();
		lstTecnologias.add("Java");
		lstTecnologias.add("C++");
		lstTecnologias.add("Python");
		lstTecnologias.add("Angular JS");
		return lstTecnologias;
	}

}
