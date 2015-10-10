package net.bitacademy.java72.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.bitacademy.java72.dao.CompanyDao;
import net.bitacademy.java72.domain.Company;
import net.bitacademy.java72.service.CompanyService;

@Service
public class CompanyServiceImpl implements CompanyService {
  @Autowired CompanyDao companyDao;
  
  @Override
  public List<Company> list(int currCnt, int listCnt) {

	  /*
	  int startIndex = (pageNo - 1) * pageSize;
    if (startIndex < 0) {
      startIndex = 0;
    }
    */
    Map<String,Object> paramMap = 
        new HashMap<String,Object>();

    paramMap.put("currCnt", currCnt);
    paramMap.put("listCnt", listCnt);

    List<Company> list = new ArrayList<Company>();
    list = companyDao.list2(paramMap);
    for (Company company : list) {
		System.out.println("company");
		System.out.println(company.getDistance());
	}

    return companyDao.list3(paramMap);
  }
/*
  @Override
  public int delete(int no) {
    return boardDao.delete(no);
  }

  @Override
  public int update(Board board) {
    return boardDao.update(board);
  }

  @Override
  public int insert(Board board) {
    return boardDao.insert(board);
  }

  @Override
  public Board get(int no) {
    return boardDao.get(no);
  }

  @Override
  public int countAll() {
    return boardDao.countAll();
  }
  
  */
}






