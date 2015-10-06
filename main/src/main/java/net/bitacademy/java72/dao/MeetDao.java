package net.bitacademy.java72.dao;

import java.util.List;
import java.util.Map;

import net.bitacademy.java72.domain.Meet;

public interface MeetDao {
  List<Meet> list(Map<String,Object> paramMap);
  int delete(int no);
  int update(Meet meet);
  int insert(Meet meet);
  Meet get(int no);
  int countAll();
}










