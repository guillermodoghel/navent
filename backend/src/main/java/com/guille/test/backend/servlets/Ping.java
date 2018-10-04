package com.guille.test.backend.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

@WebServlet("/ping")
public class Ping extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public Ping() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("application/json");
		PrintWriter out = response.getWriter();

		JSONObject jsonResponse = new JSONObject();
		jsonResponse.put("ping", "ok");
		out.print(jsonResponse);
		out.flush();

	}
}
