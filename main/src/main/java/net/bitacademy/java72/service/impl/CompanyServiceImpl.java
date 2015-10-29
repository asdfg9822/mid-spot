package net.bitacademy.java72.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.bitacademy.java72.dao.CompanyDao;
import net.bitacademy.java72.dao.PartiDao;
import net.bitacademy.java72.dao.SubwayDao;
import net.bitacademy.java72.domain.Company;
import net.bitacademy.java72.domain.PartiOrigin;
import net.bitacademy.java72.domain.Subway;
import net.bitacademy.java72.service.CompanyService;

@Service
public class CompanyServiceImpl implements CompanyService {
	@Autowired
	CompanyDao companyDao;
	@Autowired
	PartiDao partiDao;
	@Autowired
	SubwayDao subwayDao;

	@Override
	public List<Company> list(int currCnt, int listCnt, int cateNo, int membNo, int partiNo) {

		Map<String, Object> paramMap = new HashMap<String, Object>();

		paramMap.put("currCnt", currCnt);
		paramMap.put("listCnt", listCnt);
		paramMap.put("cateNo", cateNo);
		paramMap.put("membNo", membNo);
		paramMap.put("partiNo", partiNo);

		//중간지점 찾기
		float latAll = 0;
		float lonAll = 0;
		List<PartiOrigin> list = partiDao.partiAll(partiNo);
		for (PartiOrigin partiOrigin : list) {
			System.out.println(partiOrigin);
			latAll += Float.parseFloat(partiOrigin.getLat());
			lonAll += Float.parseFloat(partiOrigin.getLon());
		}

		System.out.println("latAvg = " + (latAll / list.size()));
		System.out.println("lonAvg = " + (lonAll / list.size()));

		paramMap.put("latAvg", latAll / list.size());
		paramMap.put("lonAvg", lonAll / list.size());

		//중간 지점으로 추천 장소 찾기
		List<Subway> sublist = subwayDao.list(paramMap);
		System.out.println("----Sub List----");
		for (Subway subway : sublist) {
			System.out.println(subway.getSubName() + " = " + subway.getLat() + " / " + subway.getLon());
			paramMap.put("subLat", subway.getLat());
			paramMap.put("subLon", subway.getLon()); 

			if(companyDao.rcmdListCnt(paramMap).size() == 0 ) {
				System.out.println("rcmdListCnt : 0");
				continue;
			}
			
			System.out.println("company Count = " + companyDao.rcmdListCnt(paramMap).size());
		}
		System.out.println("----End of Sub List----");

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
		if (companyDao.likeUp(paramMap) > 0) {
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
		if (companyDao.likeDown(paramMap) > 0) {
			System.out.println("like Down Success");
		} else {
			System.out.println("like Down Fail");
		}

		return companyDao.likeCnt(compNo);
	}

	@Override
	public List<Company> listCompany(Company company) {
		// TODO Auto-generated method stub
		return companyDao.listCompany(company);
	}

}
