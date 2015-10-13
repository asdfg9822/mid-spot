package net.bitacademy.java72.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.bitacademy.java72.dao.DestDao;
import net.bitacademy.java72.domain.Dest;
import net.bitacademy.java72.service.DestService;

@Service
public class DestServiceImpl implements DestService {
  @Autowired DestDao destDao;
  
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
  public int insert(Dest dest) {
    return destDao.insert(dest);
  }

//  @Override
//  public Dest get(int no) {
//    return destDao.get(no);
//  }
//
//  @Override
//  public int countAll() {
//    return boardDao.countAll();
//  }
//  
  
}






