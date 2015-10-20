package net.bitacademy.java72.service.impl;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.bitacademy.java72.dao.PickDao;
import net.bitacademy.java72.domain.Pick;
import net.bitacademy.java72.service.PickService;

@Service
public class PickServiceImpl implements PickService {
  @Autowired PickDao pickDao;

@Override
public List<Pick> pickList(int meetNo) {

	System.out.println("pickserviceImpl : " + meetNo);

	return pickDao.pickList(meetNo);

}

@Override
public List<Pick> pickGet() {


	return pickDao.pickGet();
}







}






