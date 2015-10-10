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

import com.google.gson.Gson;

import net.bitacademy.java72.domain.Company;
import net.bitacademy.java72.service.CompanyService;

@Controller("json.CompanyController")
@RequestMapping("/json/company")
public class CompanyController {
	@Autowired
	CompanyService companyService;
	@Autowired
	ServletContext servletContext;

	@RequestMapping("/list")
	public Object list(@RequestParam(required = false, defaultValue = "1") int currCnt,
			@RequestParam(required = false, defaultValue = "3") int listCnt) {

		System.out.println("currCnt:" + currCnt);
		System.out.println("listCnt:" + listCnt);

		Map<String, Object> result = new HashMap<String, Object>();

		System.out.println("/json/company/list.do excute..!!");

		result.put("currCnt", currCnt);
		result.put("listCnt", listCnt);

		/*
		int totalCnt = CompanyService.cntAll();
		int lastPageNo = totalCnt / listCnt;
		if ((totalCnt % listCnt) > 0) {
			lastPageNo++;
		}

		if (currCnt < lastPageNo) {
			result.put("isNextPage", true);
		} else {
			result.put("isNextPage", false);
		}
	 	*/

		List<Company> list = companyService.list(currCnt, listCnt);
		result.put("data", list);
		result.put("length", list.size());
		return result;
	}

	@RequestMapping("/pubTrans")
	public Object pubTrans(@RequestParam(required = false, defaultValue = "127.11040408554267") String sX,
			@RequestParam(required = false, defaultValue = "37.509756362942284") String sY,
			@RequestParam(required = false, defaultValue = "127.13806175828525") String eX,
			@RequestParam(required = false, defaultValue = "37.48078441518208") String eY) {
		// int count = companyService.delete(no);

		Map<String, Object> result = new HashMap<String, Object>();

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
	/*
	 * @RequestMapping("/detail") public Object detail(int no) {
	 * Map<String,Object> result = new HashMap<String,Object>();
	 * result.put("data", boardService.get(no));
	 *
	 * return result; }
	 *
	 * @RequestMapping("/insert") public Object insert(Board board) throws
	 * Exception { int count = boardService.insert(board);
	 *
	 * Map<String,Object> result = new HashMap<String,Object>(); if (count > 0)
	 * { result.put("data", "success"); } else { result.put("data", "failure");
	 * }
	 *
	 * return result; }
	 *
	 * @RequestMapping("/list") public Object list(
	 *
	 * @RequestParam(required=false, defaultValue="1") int pageNo,
	 *
	 * @RequestParam(required=false, defaultValue="3") int pageSize) {
	 *
	 * Map<String,Object> result = new HashMap<String,Object>();
	 *
	 * result.put("pageNo", pageNo);
	 *
	 * int totalCount = boardService.countAll(); int lastPageNo = totalCount /
	 * pageSize; if ((totalCount % pageSize) > 0) { lastPageNo++; }
	 *
	 * if (pageNo < lastPageNo) { // 다음 페이지가 있다면 result.put("isNextPage", true);
	 * } else { result.put("isNextPage", false); }
	 *
	 * result.put("pageSize", pageSize);
	 *
	 * result.put("data", boardService.list(pageNo, pageSize));
	 *
	 * return result; }
	 *
	 * @RequestMapping("/update") public Object boardUpdate (Board board) throws
	 * Exception {
	 *
	 * int count = boardService.update(board);
	 *
	 * Map<String,Object> result = new HashMap<String,Object>(); if (count > 0)
	 * { result.put("data", "success"); } else { result.put("data", "failure");
	 * }
	 *
	 * return result; }
	 */
}
