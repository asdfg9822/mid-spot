package net.bitacademy.java72.control.json;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletContext;

import net.bitacademy.java72.domain.Meet;
import net.bitacademy.java72.service.MeetService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller("json.MeetController")
@RequestMapping("/json/meet")
public class MeetController {
  @Autowired MeetService meetService;
  @Autowired ServletContext servletContext;

  
  
  
  @RequestMapping("/delete")
  public Object delete(int meetNo) {
    int count = meetService.delete(meetNo);

    Map<String,Object> result = 
        new HashMap<String,Object>();
    if (count > 0) {
      result.put("data", "success");
    } else {
      result.put("data", "failure");
    }
    
    return result;
  }
  
  @RequestMapping("/detail")
  public Object detail(int meetNo) {
    Map<String,Object> result = 
        new HashMap<String,Object>();
    result.put("data", meetService.get(meetNo));
    
    return result;
  }

  @RequestMapping("/insert")
  public Object insert(Meet meet) throws Exception {
    
    System.out.println(meet);
    
      int count = meetService.insert(meet);
      
      Map<String,Object> result = 
          new HashMap<String,Object>();
      if (count > 0) {
        result.put("data", "success");
      } else {
        result.put("data", "failure");
      }
      
      return result;
  }
  
  @RequestMapping("/list")
  public Object list(
      @RequestParam(required=false, defaultValue="1") 
      int pageNo,
      @RequestParam(required=false, defaultValue="3")
      int pageSize) {
    
    Map<String,Object> result = 
        new HashMap<String,Object>();
    
    result.put("pageNo", pageNo);
    
    int totalCount = meetService.countAll();
    int lastPageNo = totalCount / pageSize;
    if ((totalCount % pageSize)  > 0) {
      lastPageNo++;
    }
    
    if (pageNo < lastPageNo) { // 다음 페이지가 있다면
      result.put("isNextPage", true);
    } else {
      result.put("isNextPage", false);
    }
    
    result.put("pageSize", pageSize);
    
    result.put("data", 
        meetService.list(pageNo, pageSize));
    
    return result;
  }
  
  @RequestMapping("/update")
  public Object meetUpdate (Meet meet) throws Exception {

    int count = meetService.update(meet);

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





