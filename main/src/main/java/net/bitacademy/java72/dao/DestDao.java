package net.bitacademy.java72.dao;

import java.util.List;

import net.bitacademy.java72.domain.Dest;

public interface DestDao {
  List<Dest> list(Dest dest);
//  int delete(int no);
//  int update(Board board);
    int insert(Dest dest);
//    Dest get(int no);
//  int countAll();
    int insertSpec(Dest dest);
    List<Dest> listPermision(Dest dest);
    List<Dest> listPartiSelect(Dest dest);

}











