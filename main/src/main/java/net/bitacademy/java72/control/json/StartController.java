package net.bitacademy.java72.control.json;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mysql.fabric.xmlrpc.base.Array;

import net.bitacademy.java72.domain.Start;
import net.bitacademy.java72.service.StartService;

@Controller("json.StartController")
@RequestMapping("/json/start")
public class StartController {
  @Autowired StartService startService;
  @Autowired ServletContext servletContext;

  @RequestMapping("/partiMembList")
  public Object partiMembList(Start start) {
    System.out.println("partiMembList");
    Map<String,Object> result = 
        new HashMap<String,Object>();
    
    List<Start> list = startService.partiMembList(start);
    
    result.put("size", list.size());
    result.put("data", startService.partiMembList(start));
    
//    String[] latList = new String[list.size()];
//    String[] lonList = new String[list.size()];
    
//    for (int index=0; index < list.size(); index++) {
      
//      System.out.println(list.get(index).getLat());
//      System.out.println(list.get(index).getLon());
      
//      latList[index] = list.get(index).getLat();
//      lonList[index] = list.get(index).getLon();
//      result.put(latList[index], list.get(index).getLat());
//      result.put(lonList[index], list.get(index).getLon());
//      
//      System.out.println(latList[index]);
//      System.out.println(lonList[index]);
//    }
    
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
  
  @RequestMapping("/detail")
  public Object detail(int no) {
    Map<String,Object> result = 
        new HashMap<String,Object>();
    result.put("data", boardService.get(no));
    
    return result;
  }
  */
  
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
  
  @RequestMapping("/update")
  public Object boardUpdate (Board board) throws Exception {

    int count = boardService.update(board);

    Map<String,Object> result = 
        new HashMap<String,Object>();
    if (count > 0) {
      result.put("data", "success");
    } else {
      result.put("data", "failure");
    }
    
    return result;
  }*/
}





