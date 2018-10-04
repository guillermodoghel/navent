package com.guille.test.backend.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import com.guille.test.backend.services.PedidosServices;

@WebServlet("/pedidos/borrar/*")
public class DeletePedido extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public DeletePedido() {
		super();
		// TODO Auto-generated constructor stub
	}

	protected void doDelete(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		PrintWriter out = response.getWriter();
		JSONObject jsonResponse = new JSONObject();
		response.setContentType("application/json");
		
		Integer id = new Integer((request.getPathInfo().split("/")[1]));
		
		if(new PedidosServices().remove(id)) {
			response.setStatus(HttpServletResponse.SC_OK);
			jsonResponse.put("message", "ok");
			out.print(jsonResponse);
			out.flush();	
		}else {
			response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			jsonResponse.put("message", "fail");
			out.print(jsonResponse);
			out.flush();
		}
		
		
	}

}
