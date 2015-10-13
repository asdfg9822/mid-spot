package net.bitacademy.java72.domain;

import java.io.Serializable;

public class Dest implements Serializable {

	private static final long serialVersionUID = 1L;

	protected int meet_no;
	protected int cate_no;
	protected String cate_nm;

	
	
  public String getCate_nm() {
    return cate_nm;
  }
  public void setCate_nm(String cate_nm) {
    this.cate_nm = cate_nm;
  }
  public int getMeet_no() {
    return meet_no;
  }
  public void setMeet_no(int meet_no) {
    this.meet_no = meet_no;
  }
  public int getCate_no() {
    return cate_no;
  }
  public void setCate_no(int cate_no) {
    this.cate_no = cate_no;
  }

}

