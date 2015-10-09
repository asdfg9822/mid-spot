package net.bitacademy.java72.domain;

import java.io.Serializable;


/* 값을 실어 나르는 클래스(Data Transfer Object)
 * => 값을 표현하는 클래스
 * => 특정 업무 영역의 데이터를 표현한다고 해서 Business Domain Object라고도 한다.
 * => 줄여서 Domain Object 객체라고 한다.
 * 
 * Serializable 인터페이스
 * => 클래스의 데이터를 바이트 배열로 직렬화할 수 있음을 표시할 때 사용.
 * => 메서드가 없다. 단지 JVM에게 직렬화를 허용한다고 표시하는 용도로 사용한다.
 */
public class Meet implements Serializable {
  /* 질력화될 때 데이터의 버전 정보도 함께 저장된다.
   * 나중에 바이트 배열을 다시 객체로 복원할 때, 버전을 검사하는 데 사용한다.
   */
  private static final long serialVersionUID = 1L;

  protected int     meetNo;
  protected String  meetName;
  protected String    meetDate;
  protected String imgUrl;
  protected int  memberNo; 
  protected int partiNo;
  protected String memberName;
  
  
  
  
  
  
  public String getMemberName() {
    return memberName;
  }
  public void setMemberName(String memberName) {
    this.memberName = memberName;
  }
  public int getPartiNo() {
    return partiNo;
  }
  public void setPartiNo(int partiNo) {
    this.partiNo = partiNo;
  }
  public int getMemberNo() {
    return memberNo;
  }
  public void setMemberNo(int memberNo) {
    this.memberNo = memberNo;
  }
  public int getMeetNo() {
    return meetNo;
  }
  public void setMeetNo(int meetNo) {
    this.meetNo = meetNo;
  }
  public String getMeetName() {
    return meetName;
  }
  public void setMeetName(String meetName) {
    this.meetName = meetName;
  }
  public String getMeetDate() {
    return meetDate;
  }
  public void setMeetDate(String meetDate) {
    this.meetDate = meetDate;
  }
  public String getImgUrl() {
    return imgUrl;
  }
  public void setImgUrl(String imgUrl) {
    this.imgUrl = imgUrl;
  }

  
  
}