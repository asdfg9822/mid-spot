package net.bitacademy.java72.service;

import java.util.List;

import net.bitacademy.java72.domain.Dest;

public interface DestService {
//  int delete(int no);
//  int update(Board board);
  int insert(Dest dest);
  List<Dest> list(Dest dest);
//  Dest listSpec(Dest dest);
//  Dest get(int no);
//  int countAll();*/
  int insertSpec(Dest dest);
}







