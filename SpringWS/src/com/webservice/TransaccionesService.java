package com.webservice;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.transaccion.ITransacciones;

@Component
@Path("/transaccion")
public class TransaccionesService {

	@Autowired
	@Qualifier("transaccionesImpl")
	ITransacciones transaccionesImpl;

	@GET
	@Path("/obtenerRespuesta")
	public Response obtenerRespuesta() {
		String respuesta = transaccionesImpl.obtenerRespuesta();
		return Response.status(200).entity(respuesta).build();
	}

	@GET
	@Path("/obtenerTecnologias")
	@Produces(MediaType.APPLICATION_JSON)
	public List<String> obtenerTecnologias() {
		return transaccionesImpl.obtenerTecnologias();
	}

}