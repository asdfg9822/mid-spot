package net.bitacademy.java72.dao;

import java.util.List;

import net.bitacademy.java72.domain.Dest;
import net.bitacademy.java72.domain.Pick;

public interface DestDao {
  List<Dest> list(Dest dest);
  int delete(Dest dest);
//  int update(Board board);
    int insert(Dest dest);
//    Dest get(int no);
//  int countAll();
    int insertSpec(Dest dest);
    List<Dest> listPermision(Dest dest);
    List<Dest> listPartiSelect(Dest dest);
    
    
    List<Dest> specList(int compNo);

}











