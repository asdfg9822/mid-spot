package net.bitacademy.java72.dao;

import java.util.List;
import java.util.Map;

import net.bitacademy.java72.domain.PartiOrigin;

public interface PartiDao {
  int insert(Map<String, Object> paramMap);
  int select(Map<String, Object> paramMap);
  List<PartiOrigin> partiAll(int partiNo);
}











