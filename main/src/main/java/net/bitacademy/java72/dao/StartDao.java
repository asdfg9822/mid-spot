package net.bitacademy.java72.dao;

import java.util.List;

import net.bitacademy.java72.domain.PartiMemb;
import net.bitacademy.java72.domain.Start;

public interface StartDao {
  //List<Company> list(Map<String,Object> paramMap);
//  List<Company> list();
//  int delete(int no);
//  int update(Board board);
    int insert(Start start);
//  Board get(int no);
//  int countAll();
    List<PartiMemb> partiMembList(int partiNo);
}











