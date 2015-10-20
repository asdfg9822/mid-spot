package net.bitacademy.java72.control.json;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import net.bitacademy.java72.domain.Pick;
import net.bitacademy.java72.service.PickService;

@Controller("json.PickController")
@RequestMapping("/json/pick")
public class PickController {
  @Autowired PickService pickService;
  @Autowired ServletContext servletContext;

  
  @RequestMapping("/list")
  public Object list(
		 @RequestParam(required = true) int meetNo
		  ) {
	    
	  System.out.println("Picklist...controller");
	  System.out.println("meetNo:" + meetNo);
	  
	    Map<String,Object> result = 
	        new HashMap<String,Object>();
 
	    result.put("data", pickService.pickList(meetNo));


		
	    return result;
  }
  
  @RequestMapping("/get")
  public Object get(
		  @RequestParam(required = true) String pick,	  
		  @RequestParam(required = false, defaultValue = "127.13806175828525") String eX,	  
		  @RequestParam(required = false, defaultValue = "37.48078441518208") String eY	  
		  ) {
	  
	  Map<String,Object> result = 
			  new HashMap<String,Object>();
	  
	
	  result.put("date", pick);
	  result.put("lon", eX);
	  result.put("lat", eY);
	  
	  
	  return result;
  }
  
}





