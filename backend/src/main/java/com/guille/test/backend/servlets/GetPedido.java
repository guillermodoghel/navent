package com.guille.test.backend.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import com.guille.test.backend.entities.Pedido;
import com.guille.test.backend.services.PedidosServices;

@WebServlet("/pedidos/buscar/*")
public class GetPedido extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public GetPedido() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		PrintWriter out = response.getWriter();
		JSONObject jsonResponse = new JSONObject();
		response.setContentType("application/json");
		
		Integer id = new Integer(request.getPathInfo().split("/")[1]);
		
		Pedido p = new PedidosServices().search(id);
		
		if(p==null) {
			response.setStatus(HttpServletResponse.SC_NOT_FOUND);
			out.print("[]");
			out.flush();
		}else {
		response.setStatus(HttpServletResponse.SC_OK);
		jsonResponse.put("id", p.getId());
		jsonResponse.put("nombre", p.getNombre());
		jsonResponse.put("monto", p.getMonto());
		jsonResponse.put("descuento", p.getDescuento());
		out.print(jsonResponse);
		out.flush();
		
		}
	}

}
