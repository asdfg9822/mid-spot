package net.bitacademy.java72.dao;

import java.util.List;

import net.bitacademy.java72.domain.Dest;

public interface DestDao {
  //List<Company> list(Map<String,Object> paramMap);
    List<Dest> listSpec(Dest dest);
//  int delete(int no);
//  int update(Board board);
    int insert(Dest dest);
//    Dest get(int no);
//  int countAll();

}











