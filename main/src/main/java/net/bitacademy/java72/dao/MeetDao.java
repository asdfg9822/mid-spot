package net.bitacademy.java72.dao;

import java.util.List;
import java.util.Map;

import net.bitacademy.java72.domain.Meet;
import net.bitacademy.java72.domain.MyMeet;
import net.bitacademy.java72.domain.PartiMemb;

public interface MeetDao {
  List<Meet> list(Map<String,Object> paramMap);
  int delete(int no);
  int update(Meet meet);
  int insert(Meet meet);
  Meet get(int meetNo);
  int countAll();
  List<PartiMemb> partiMembList(int partiNo);
  List<MyMeet> myMeetList(int membNo);
}











