package net.bitacademy.java72.dao;

import java.util.List;
import java.util.Map;

import net.bitacademy.java72.domain.Subway;

public interface SubwayDao {
	List<Subway> list(Map<String, Object> paramMap);
}
