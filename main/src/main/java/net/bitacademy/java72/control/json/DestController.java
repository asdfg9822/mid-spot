package net.bitacademy.java72.control.json;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import net.bitacademy.java72.domain.Dest;
import net.bitacademy.java72.service.DestService;

@Controller("json.DestController")
@RequestMapping("/json/dest")
public class DestController {
  @Autowired DestService destService;
  @Autowired ServletContext servletContext;

  @RequestMapping("/list")
  public Object list(Dest dest) {
    System.out.println("list");
    Map<String,Object> result = 
        new HashMap<String,Object>();
   /* 
    
    result.put("pageNo", pageNo);
    
    int totalCount = boardService.countAll();
    int lastPageNo = totalCount / pageSize;
    if ((totalCount % pageSize)  > 0) {
      lastPageNo++;
    }
    
    if (pageNo < lastPageNo) { // 다음 페이지가 있다면
      result.put("isNextPage", true);
    } else {
      result.put("isNextPage", false);
    }
    
    result.put("pageSize", pageSize);*/
    
    result.put("data", destService.list(dest));
    
    return result;
  }
  
  @RequestMapping("/listPermision")
  public Object listPermision(Dest dest) {
    System.out.println("listPermision");
    Map<String,Object> result = 
        new HashMap<String,Object>();
    
    result.put("data", destService.listPermision(dest));
    
    return result;
  }
  
  /*@RequestMapping("/delete")
  public Object delete(int no) {
    int count = boardService.delete(no);

    Map<String,Object> result = 
        new HashMap<String,Object>();
    if (count > 0) {
      result.put("data", "success");
    } else {
      result.put("data", "failure");
    }
    
    return result;
  }
    

*/

  
  @RequestMapping("/insert")
  public Object insert(Dest dest) throws Exception {
      
      int count = destService.insert(dest);
      
      Map<String,Object> result = 
          new HashMap<String,Object>();
      if (count > 0) {
        result.put("data", "success");
      } else {
        result.put("data", "failure");
      }
      
      return result;
  }
  /*
  @RequestMapping("/list")
  public Object list(
      @RequestParam(required=false, defaultValue="1") 
      int pageNo,
      @RequestParam(required=false, defaultValue="3")
      int pageSize) {
    
    Map<String,Object> result = 
        new HashMap<String,Object>();
    
    result.put("pageNo", pageNo);
    
    int totalCount = boardService.countAll();
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
        boardService.list(pageNo, pageSize));
    
    return result;
  }
  */
  
  @RequestMapping("/insertSpec")
  public Object insertSpec (Dest dest) throws Exception {

    int count = destService.insertSpec(dest);

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





