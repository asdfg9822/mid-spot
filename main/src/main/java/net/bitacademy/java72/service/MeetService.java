package net.bitacademy.java72.service;

import java.util.List;

import net.bitacademy.java72.domain.Meet;

public interface MeetService {
  List<Meet> list(int pageNo, int pageSize);
  int delete(int no);
  int update(Meet meet);
  int insert(Meet meet);
  Meet get(int meetNo);
  int countAll();
}







