package com.guille.test.backend.cache;

import java.util.concurrent.ConcurrentHashMap;

import com.guille.test.backend.entities.Pedido;

public class BumexMemcached {
	private static final BumexMemcached instance = new BumexMemcached();
	private static ConcurrentHashMap<Integer, Pedido> cache = new ConcurrentHashMap<Integer, Pedido>();

	protected BumexMemcached() {
	}

	public static BumexMemcached getInstance() {
		return instance;
	}

	public void insertOrUpdate(Integer key, Pedido value) {
		cache.put(key, value);
	}

	public Pedido select(Integer key) {
		return cache.get(key);
	}

	public void remove(Integer key) {
		cache.remove(key);
	}
}
