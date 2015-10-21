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
  

  @Override
  public int insert(Start start) {
    return startDao.insert(start);
  }

@Override
public List<Start> partiMembList(Start start) {
  // TODO Auto-generated method stub
  return startDao.partiMembList(start);
}
@Override
public List<Start> list(Start start) {
  // TODO Auto-generated method stub
  return startDao.list(start);
}
@Override
public int update(Start start) {
  // TODO Auto-generated method stub
  return startDao.update(start);
}

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






