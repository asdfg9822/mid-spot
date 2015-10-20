package net.bitacademy.java72.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.bitacademy.java72.dao.CateDao;
import net.bitacademy.java72.domain.Cate;
import net.bitacademy.java72.service.CateService;


@Service
public class CateServicelmpl implements CateService {
	
  @Autowired CateDao cateDao;

@Override
public List<Cate> cateList(int meetNo) {

	System.out.println("CateServicelmpl : " + meetNo);
	
	return cateDao.cateList(meetNo);
}
  
  
}






