package net.bitacademy.java72.service;

import java.util.List;


import net.bitacademy.java72.domain.Start;

public interface StartService {
//  List<Company> list();
//  int delete(int no);
//  int update(Board board);
  int insert(Start start);
//  Board get(int no);
//  int countAll();*/
  List<Start> start(int parti_no, int memb_no);

}







