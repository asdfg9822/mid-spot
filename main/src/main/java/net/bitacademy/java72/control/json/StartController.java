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
  @Autowired StartService startService;
  @Autowired ServletContext servletContext;
  
  @RequestMapping("/insert")
  public Object insert(Start start) throws Exception {
      System.out.println("/json/start/insert.do excute..!!");
      int count = startService.insert(start);
      
      Map<String,Object> result = 
          new HashMap<String,Object>();
      if (count > 0) {
        result.put("data", "success");
      } else {
        result.put("data", "failure");
      }
      
      return result;
  }
  

  
 
}





