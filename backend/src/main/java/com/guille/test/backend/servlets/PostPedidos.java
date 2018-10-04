package com.guille.test.backend.servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.json.JSONObject;

import com.guille.test.backend.entities.Pedido;
import com.guille.test.backend.services.PedidosServices;

@WebServlet("/pedidos/guardar")
public class PostPedidos extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public PostPedidos() {
		super();
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		StringBuilder sb = new StringBuilder();
		BufferedReader reader = request.getReader();
		PrintWriter out = response.getWriter();
		JSONObject jsonResponse = new JSONObject();
		response.setContentType("application/json");
		
		try {
			String line;
			while ((line = reader.readLine()) != null) {
				sb.append(line).append('\n');
			}
		} finally {
			reader.close();
		}
		
		try {
			JSONObject jsonObject = new JSONObject(sb.toString());
	
			if(jsonObject.getString("descuento").equals("")) {
				jsonObject.put("descuento", 0);	
			}
			
			Pedido p = new Pedido(jsonObject.getString("nombre"), jsonObject.getInt("monto"),jsonObject.getInt("descuento"));
			new PedidosServices().insertOrUpdate(p);
			response.setStatus(HttpServletResponse.SC_OK);
			jsonResponse.put("message", "ok");
			out.print(jsonResponse);
			out.flush();
		} catch (JSONException e) {
			response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			jsonResponse.put("message", "Error parsing JSON request string");
			out.print(jsonResponse);
			out.flush();
		}
		
	}

}
