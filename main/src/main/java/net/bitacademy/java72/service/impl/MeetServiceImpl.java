package net.bitacademy.java72.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.bitacademy.java72.dao.MeetDao;
import net.bitacademy.java72.domain.Meet;
import net.bitacademy.java72.service.MeetService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MeetServiceImpl implements MeetService {
  @Autowired MeetDao meetDao;
 
  
  @Override
  public List<Meet> list(int pageNo, int pageSize) {
    Map<String,Object> paramMap = 
        new HashMap<String,Object>();
    return meetDao.list(paramMap);
    
  }

  @Override
  public int delete(int meetNo) {
    return meetDao.delete(meetNo);
  }

  @Override
  public int update(Meet meet) {
    return meetDao.update(meet);
  }

  @Override
  public int insert(Meet meet) {
    
    return meetDao.insert(meet);
    
  }

  @Override
  public Meet get(int meetNo) {
    return meetDao.get(meetNo);
  }

  @Override
  public int countAll() {
    return meetDao.countAll();
  }
}






