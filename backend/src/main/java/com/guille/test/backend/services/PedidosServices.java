package com.guille.test.backend.services;

import com.guille.test.backend.cache.BumexMemcached;
import com.guille.test.backend.dao.PedidosDAO;
import com.guille.test.backend.entities.Pedido;

public class PedidosServices {
	private BumexMemcached cache = BumexMemcached.getInstance();
	private PedidosDAO dao = new PedidosDAO(); // some injection maybe?

	public void insertOrUpdate(Pedido p) {
		dao.insertOrUpdate(p);
	}

	public Pedido search(Integer id) {
		Pedido p = cache.select(id);
		if (p == null) {
			p = dao.select(id);
			if (p != null) {
				cache.insertOrUpdate(p.getId(), p);
			}
		}
		return p;
	}

	public boolean remove(Integer id) {
		cache.remove(id);
		if(dao.remove(id)) {
			return true;
		}else {
			return false;
		}
	}

}
