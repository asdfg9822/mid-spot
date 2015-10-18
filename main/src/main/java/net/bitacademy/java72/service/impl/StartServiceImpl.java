package net.bitacademy.java72.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.bitacademy.java72.dao.StartDao;
import net.bitacademy.java72.domain.Start;
import net.bitacademy.java72.service.StartService;

@Service
public class StartServiceImpl implements StartService {
  @Autowired StartDao startDao;
  
//  @Override
//  public List<Company> list() {
//    
//	  int startIndex = (pageNo - 1) * pageSize;
//    if (startIndex < 0) {
//      startIndex = 0;
//    }
//    
//    Map<String,Object> paramMap = 
//        new HashMap<String,Object>();
//    paramMap.put("startIndex", startIndex);
//    paramMap.put("pageSize", pageSize);
//    
//    return companyDao.list();
//  }
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
  public int insert(Start start) {
    return startDao.insert(start);
  }
//
//  @Override
//  public Board get(int no) {
//    return boardDao.get(no);
//  }
//
//  @Override
//  public int countAll() {
//    return boardDao.countAll();
//  }
//  
@Override
public List<Start> partiMembList(Start start) {
  // TODO Auto-generated method stub
  return startDao.partiMembList(start);
}

  
}






