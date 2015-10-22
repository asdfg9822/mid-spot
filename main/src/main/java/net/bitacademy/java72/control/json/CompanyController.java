package net.bitacademy.java72.control.json;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import net.bitacademy.java72.domain.Company;
import net.bitacademy.java72.domain.Start;
import net.bitacademy.java72.service.CompanyService;
import net.bitacademy.java72.service.PickService;
import net.bitacademy.java72.service.StartService;

@Controller("json.CompanyController")
@RequestMapping("/json/company")
public class CompanyController {
	@Autowired
	CompanyService companyService;
	@Autowired
	ServletContext servletContext;
	@Autowired
	StartService startService;
	@Autowired
	PickService pickService;

	@RequestMapping("/list")
	public Object list(
			@RequestParam(required = true) int membNo,
			@RequestParam(required = true) int partiNo,
			@RequestParam(required = true) int currCnt,
			@RequestParam(required = true) int listCnt,
			@RequestParam(required = true) int cateNo) {

		System.out.println("membNo:" + membNo);
		System.out.println("meetNo:" + partiNo);
		System.out.println("cateNo:" + cateNo);
		System.out.println("currCnt:" + currCnt);
		System.out.println("listCnt:" + listCnt);

//		String lat = null;
//		String lon = null;
//
//		List<Pick> pickGet = pickService.pickGet();
//
//		for (Pick list : pickGet) {
//			lat = (String)list.getLat();
//			lon = (String)list.getLon();
//		}
//
//		System.out.println("picklat:" + lat);
//		System.out.println("picklon:" + lon);



		Map<String, Object> result = new HashMap<String, Object>();

		System.out.println("/json/company/list.do excute..!!");

		result.put("currCnt", currCnt);
		result.put("listCnt", listCnt);

		System.out.println("session test : " + "membNo-> " + membNo);

		List<Company> list = companyService.list(currCnt, listCnt, cateNo, membNo, partiNo);
		result.put("data", list);
		result.put("length", list.size());
		return result;
	}

	@RequestMapping("/pubTrans")
	public Object pubTrans(
			@RequestParam(required = true) int membNo,
			@RequestParam(required = true) int partiNo,
			@RequestParam(required = false, defaultValue = "127.13806175828525") String eX,
			@RequestParam(required = false, defaultValue = "37.48078441518208") String eY) {
		// int count = companyService.delete(no);

		Map<String, Object> result = new HashMap<String, Object>();

		System.out.println("eX"+eX);
		System.out.println("eY"+eY);
		String sX = null;
		String sY = null;

		System.out.println("길찾기" + membNo);
		System.out.println(partiNo);

		List<Start> start = startService.start(partiNo, membNo);


		for (Start list : start) {
		  sY = (String)list.getLat();
      sX = (String)list.getLon();
		}
		
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

			result.put("result", transResult);
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		} finally {

			try {
				rd.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return result;
	}

	@RequestMapping("/likeCnt")
	public Object like(@RequestParam(required = true) int compNo) {

		System.out.println("/json/company/likeCnt.do excute..!!");

		Map<String, Object> result = new HashMap<String, Object>();
		result.put("likeCnt", companyService.likeCnt(compNo));

		return result;
	}

	@RequestMapping("/likeUp")
	public Object likeUp(
			@RequestParam(required = true) int compNo,
			@RequestParam(required = true) int membNo,
			@RequestParam(required = true) int partiNo) {

		System.out.println("/json/company/likeUp.do excute..!!");
		Map<String, Object> result = new HashMap<String, Object>();

		if (companyService.isLike(compNo, membNo, partiNo) > 0) {
			result.put("like", "off");
			result.put("likeCnt", companyService.likeDown(compNo, membNo, partiNo));
		} else {
			result.put("like", "on");
			result.put("likeCnt", companyService.likeUp(compNo, membNo, partiNo));
		}
		return result;
	}
	@RequestMapping("/listCompany")
	public Object listCompany(Company company) {
	  System.out.println("/json/company/listCompany.do excute..!!");
	  
	  Map<String, Object> result = new HashMap<String, Object>();
	  
	  result.put("data", companyService.listCompany(company));
	  return result;
	}

}
