package net.bitacademy.java72.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
public List<Start> start(int parti_no, int memb_no) {

	Map<String, Object> paramMap = new HashMap<String, Object>();

	System.out.println("start_serv mem"+ memb_no);
	System.out.println("start_serv par"+ parti_no);
	paramMap.put("memb_no", memb_no);
	paramMap.put("parti_no", parti_no);

	return startDao.start(paramMap);

}

  
}






