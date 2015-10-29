package net.bitacademy.java72.service;

import java.util.List;

import net.bitacademy.java72.domain.Company;
import net.bitacademy.java72.domain.Start;

public interface StartService {
  int insert(Start start);
  List<Start> partiMembList(Start start);
  List<Start> list(Start start);
  int update(Start start);
  List<Start> start(int parti_no, int memb_no);
  int savePlace(Start start);
}







