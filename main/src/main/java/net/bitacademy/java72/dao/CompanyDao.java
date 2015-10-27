package net.bitacademy.java72.dao;

import java.util.List;
import java.util.Map;

import net.bitacademy.java72.domain.Company;

public interface CompanyDao {
	// List<Company> list(Map<String,Object> paramMap);
	List<Company> listAll(Map<String, Object> paramMap);
	List<Company> rcmdList(Map<String, Object> paramMap);
	int rcmdListCnt(Map<String, Object> paramMap);
	List<Company> list3(Map<String, Object> paramMap);
	List<Company> listCompany(Company company);
	//String[] like(Map<String, Object> paramMap);
	int likeCnt(int compNo);
	int likeUp(Map<String, Object> paramMap);
	int isLike(Map<String, Object> paramMap);
	int likeDown(Map<String, Object> paramMap);
}
