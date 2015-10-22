package net.bitacademy.java72.service;

import java.util.List;

import net.bitacademy.java72.domain.Company;

public interface CompanyService {
  List<Company> list(int currCnt, int listCnt, int cateNo, int membNo, int partiNo);
  List<Company> listAll(int currCnt, int listCnt);
  /*int delete(int no);
  int update(Board board);
  int insert(Board board);
  Board get(int no);
  int countAll();*/
  //String[] like(int compNo, int membNo, int partiNo);
  int likeCnt(int compNo);
  int likeUp(int compNo, int membNo, int partiNo);
  int isLike(int compNo, int membNo, int partiNo);
  int likeDown(int compNo, int membNo, int partiNo);
  List<Company>  listCompany(Company company);
}







