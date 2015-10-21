package net.bitacademy.java72.service;

import java.util.List;

import net.bitacademy.java72.domain.Meet;
import net.bitacademy.java72.domain.MyMeet;
import net.bitacademy.java72.domain.PartiMemb;

public interface MeetService {
  List<Meet> list(int pageNo, int pageSize);
  int delete(int no);
  int update(Meet meet);
  int insert(Meet meet);
  Meet get(int meetNo);
  int countAll();
  List<PartiMemb> partiMembList(int partiNo);
  List<MyMeet> myMeetList(int membNo);
  int partiInsert(int membNo, int meetNo);
}







