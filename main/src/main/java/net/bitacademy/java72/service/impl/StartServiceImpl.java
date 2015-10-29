package net.bitacademy.java72.service.impl;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.bitacademy.java72.dao.CompanyDao;
import net.bitacademy.java72.dao.PartiDao;
import net.bitacademy.java72.dao.StartDao;
import net.bitacademy.java72.dao.SubwayDao;
import net.bitacademy.java72.domain.PartiOrigin;
import net.bitacademy.java72.domain.RcmdCompCate;
import net.bitacademy.java72.domain.Start;
import net.bitacademy.java72.domain.Subway;
import net.bitacademy.java72.service.StartService;

@Service
public class StartServiceImpl implements StartService {
	@Autowired
	StartDao startDao;
	@Autowired
	PartiDao partiDao;
	@Autowired
	CompanyDao companyDao;
	@Autowired
	SubwayDao subwayDao;

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

		System.out.println("start_serv mem" + memb_no);
		System.out.println("start_serv par" + parti_no);
		paramMap.put("memb_no", memb_no);
		paramMap.put("parti_no", parti_no);

		return startDao.start(paramMap);

	}

	@Override
	public int savePlace(Start start) {

		Map<String, Object> paramMap = new HashMap<String, Object>();

		int cateNo = 0;
		int partiNo = start.getParti_no();
		
		paramMap.put("cateNo", cateNo);
		paramMap.put("partiNo", partiNo);

		// 중간지점 찾기
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

		// 중간 지점으로 추천 장소 찾기
		List<Subway> sublist = subwayDao.list(paramMap);
		System.out.println("----Sub List----");

		List<Subway> okSubList = new ArrayList<Subway>();
		int i = 0 ,j = 0;
		boolean status = false;
		for (Subway subway : sublist) {
			paramMap.put("subLat", subway.getLat());
			paramMap.put("subLon", subway.getLon());

			List<RcmdCompCate> rcmdCateList = startDao.partiCateList(partiNo);
			for (RcmdCompCate rcmdCompCate : rcmdCateList) {
				System.out.println(rcmdCompCate);
				cateNo = rcmdCompCate.getCateNo();
				paramMap.put("cateNo", cateNo);

				if (companyDao.rcmdListCnt(paramMap).size() == 0) {
					System.out.println("rcmdListCnt : 0");
					status = true;
					break;
				}
			}
			if (cateNo == 0) {
				System.out.println("해당 모임에 CateNo가 등록되어 있지 않습니다. ");
				continue;
			}
			if (status) {
				System.out.println("목적에 부합하지 않습니다. ");
				System.out.println("X목적에 부합"+(++j)+"X " + subway.getSubName() + " = " + subway.getLat() + " / " + subway.getLon());
				continue;
			}
			
			System.out.println("[목적에 부합 "+(++i)+"] " + subway.getSubName() + " = " + subway.getLat() + " / " + subway.getLon());
			

			okSubList.add(subway);
		}
		System.out.println("----End of Sub List ["+i+"/"+j+"]----");

		System.out.println("----Success Subway-----");
		int totalTime = 0;
		for (Subway subway : okSubList) {
			/*System.out.println(subway);
			System.out.println(start);*/
			totalTime += transTime(start,subway);
			
			System.out.println("totalTime : " + (totalTime));
			System.out.println("totalTimeAvg : " + (totalTime/okSubList.size() ));
			
		}
		System.out.println("----End of Success Subway-----");
		

		return 0;
	}
	
	public int transTime(Start s, Subway e) {
		
		
		Map<String, Object> result = new HashMap<String, Object>();

		int membNo = s.getMemb_no();
		int partiNo = s.getParti_no();
		int value = 0;
		
		String sX = s.getLat();
		String sY = s.getLon();
		String eY = e.getLat();
		String eX = e.getLon();

		System.out.println("길찾기" + membNo);
		System.out.println(partiNo);

		List<Start> start = start(partiNo, membNo);

		for (Start list : start) {
			sY = (String) list.getLat();
			sX = (String) list.getLon();
		}

		System.out.println("eX" + eX);
		System.out.println("eY" + eY);
		System.out.println("출발지sX" + sX);
		System.out.println("출발지sY" + sY);

		BufferedReader rd = null;
		try {

			String baseUrl = "http://map.naver.com/findroute2/findPubTransRoute.nhn?call=route&output=json";
			String params = "&start=" + sX + "," + sY + ",%20";
			params += "&destination=" + eX + "," + eY + ",%20";
			params += "&search=4";

			StringBuilder transResult = new StringBuilder();
			URL url = new URL(baseUrl + params);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");
			rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			String line;
			while ((line = rd.readLine()) != null) {
				transResult.append(line);
				System.out.println(line);
			}

			transResult.toString();

			System.out.println("-----trans------");
			System.out.println(transResult.indexOf("totalTime"));
			System.out.println(transResult.indexOf("totalWalk"));
			value = Integer.parseInt(transResult.substring(transResult.indexOf("totalTime")+12, transResult.indexOf("totalWalk")-3));
			System.out.println("-----End of trans------");
			
			result.put("result", transResult);
			result.put("startx", sX);
			result.put("starty", sY);

		} catch (Exception e2) {
			// TODO: handle exception
			e2.printStackTrace();
		} finally {

			try {
				rd.close();
			} catch (IOException e2) {
				// TODO Auto-generated catch block
				e2.printStackTrace();
			}
		}
		
		return value;
	}

}
