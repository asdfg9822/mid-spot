package net.bitacademy.java72.service.impl;

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
	@Autowired
	CompanyDao companyDao;

	@Override
	public List<Company> list(int currCnt, int listCnt, int cateNo, int membNo, int partiNo) {

		Map<String, Object> paramMap = new HashMap<String, Object>();

		paramMap.put("currCnt", currCnt);
		paramMap.put("listCnt", listCnt);
		paramMap.put("cateNo", cateNo);
		paramMap.put("membNo", membNo);
		paramMap.put("partiNo", partiNo);

		return companyDao.rcmdList(paramMap);
	}

	@Override
	public List<Company> listAll(int currCnt, int listCnt) {

		Map<String, Object> paramMap = new HashMap<String, Object>();

		paramMap.put("currCnt", currCnt);
		paramMap.put("listCnt", listCnt);


		return companyDao.listAll(paramMap);
	}

	@Override
	public int likeCnt(int compNo) {
		return companyDao.likeCnt(compNo);
	}

	@Override
	public int likeUp(int compNo, int membNo, int partiNo) {

		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("compNo", compNo);
		paramMap.put("membNo", membNo);
		paramMap.put("partiNo", partiNo);
		if(companyDao.likeUp(paramMap) > 0) {
			System.out.println("like Success");
		} else {
			System.out.println("like Fail");
		}

		return companyDao.likeCnt(compNo);
	}

	@Override
	public int isLike(int compNo, int membNo, int partiNo) {

		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("compNo", compNo);
		paramMap.put("membNo", membNo);
		paramMap.put("partiNo", partiNo);

		return companyDao.isLike(paramMap);
	}

	@Override
	public int likeDown(int compNo, int membNo, int partiNo) {
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("compNo", compNo);
		paramMap.put("membNo", membNo);
		paramMap.put("partiNo", partiNo);
		if(companyDao.likeDown(paramMap) > 0) {
			System.out.println("like Down Success");
		} else {
			System.out.println("like Down Fail");
		}

		return companyDao.likeCnt(compNo);
	}



	/*
	 * @Override public int delete(int no) { return boardDao.delete(no); }
	 *
	 * @Override public int update(Board board) { return boardDao.update(board);
	 * }
	 *
	 * @Override public int insert(Board board) { return boardDao.insert(board);
	 * }
	 *
	 * @Override public Board get(int no) { return boardDao.get(no); }
	 *
	 * @Override public int countAll() { return boardDao.countAll(); }
	 *
	 */
}
