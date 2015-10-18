package net.bitacademy.java72.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.bitacademy.java72.dao.DestDao;
import net.bitacademy.java72.domain.Dest;
import net.bitacademy.java72.service.DestService;

@Service
public class DestServiceImpl implements DestService {
  @Autowired DestDao destDao;
  
  @Override
  public List<Dest> list(Dest dest) {
    
    Map<String,Object> paramMap = 
        new HashMap<String,Object>();
    
    return destDao.list(dest);
  }
//
//  @Override
//  public int delete(int no) {
//    return boardDao.delete(no);
//  }
//
//  @Override
//  public int update(Board board) {
//    return boardDao.update(board);
//  }
//
  @Override
  public int insert(Dest dest) {
    return destDao.insert(dest);
  }
  @Override
  public int insertSpec(Dest dest) {
    // TODO Auto-generated method stub
    return destDao.insertSpec(dest);
  }
  @Override
  public List<Dest> listPermision(Dest dest) {
    return destDao.listPermision(dest);
  }


  
}






