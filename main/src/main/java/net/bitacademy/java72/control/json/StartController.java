package net.bitacademy.java72.control.json;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import net.bitacademy.java72.domain.Start;
import net.bitacademy.java72.service.StartService;

@Controller("json.StartController")
@RequestMapping("/json/start")
public class StartController {
	@Autowired
	StartService startService;
	@Autowired
	ServletContext servletContext;

	@RequestMapping("/partiMembList")
	public Object partiMembList(Start start) {
		System.out.println("partiMembList");
		Map<String, Object> result = new HashMap<String, Object>();

		List<Start> list = startService.partiMembList(start);

		result.put("size", list.size());
		result.put("data", startService.partiMembList(start));

		return result;
	}

	@RequestMapping("/list")
	public Object list(Start start) {
		System.out.println("list");
		Map<String, Object> result = new HashMap<String, Object>();

		List<Start> list = startService.partiMembList(start);
		result.put("data", startService.list(start));

		return result;
	}

	@RequestMapping("/insert")
	public Object insert(Start start) throws Exception {
		System.out.println("/json/start/insert.do excute..!!");
		int count = startService.insert(start);

		Map<String, Object> result = new HashMap<String, Object>();
		if (count > 0) {
			result.put("data", "success");
		} else {
			result.put("data", "failure");
		}

		return result;
	}

	@RequestMapping("/update")
	public Object update(Start start) throws Exception {
		int count = startService.update(start);
		
		startService.savePlace(start);
		
		Map<String, Object> result = new HashMap<String, Object>();
		if (count > 0) {
			result.put("data", "success");
		} else {
			result.put("data", "failure");
		}

		return result;
	}
	
	
	 @RequestMapping("/coordinate")
	  public Object start(
			 @RequestParam(required = true) int parti_no,
			 @RequestParam(required = true) int memb_no
			  ) {

		  System.out.println("coordinate...controller");
		  System.out.println("parti_no:" + parti_no);
		  System.out.println("memb_no:" + memb_no);

		    Map<String,Object> result =
		        new HashMap<String,Object>();

		    result.put("data", startService.start(parti_no, memb_no));



		    return result;
	  }
	 
	
}
