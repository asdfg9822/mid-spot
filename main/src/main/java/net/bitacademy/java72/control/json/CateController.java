package net.bitacademy.java72.control.json;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import net.bitacademy.java72.service.CateService;


@Controller("json.CateController")
@RequestMapping("/json/cate")
public class CateController {
  @Autowired CateService cateService;
  @Autowired ServletContext servletContext;

  @RequestMapping("/list")
  public Object list(
		 @RequestParam(required = true) int meetNo
		  ) {
	    
	  System.out.println("CateController...controller");
	  System.out.println("meetNo:" + meetNo);
	  
	    Map<String,Object> result = 
	        new HashMap<String,Object>();
 
	    result.put("data", cateService.cateList(meetNo));

		
	    return result;
  }
  
  
}





