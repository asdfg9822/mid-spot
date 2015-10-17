package net.bitacademy.java72.domain;

import java.io.Serializable;

public class Dest implements Serializable {

	private static final long serialVersionUID = 1L;

	protected int meet_no;
	protected int cate_no;
	protected String cate_nm;
	protected String spec_nm;
	protected int spec_no;
	protected int comp_no;
	protected String spec_vl;
	protected String comp_nm;
	protected int memb_no;
	

  
	
	
	public int getMemb_no() {
    return memb_no;
  }
  public void setMemb_no(int memb_no) {
    this.memb_no = memb_no;
  }
  public int getComp_no() {
    return comp_no;
  }
  public void setComp_no(int comp_no) {
    this.comp_no = comp_no;
  }
  public String getSpec_vl() {
    return spec_vl;
  }
  public void setSpec_vl(String spec_vl) {
    this.spec_vl = spec_vl;
  }
  public String getComp_nm() {
    return comp_nm;
  }
  public void setComp_nm(String comp_nm) {
    this.comp_nm = comp_nm;
  }
	
  public int getSpec_no() {
    return spec_no;
  }
  public void setSpec_no(int spec_no) {
    this.spec_no = spec_no;
  }
  public String getSpec_nm() {
    return spec_nm;
  }
  public void setSpec_nm(String spec_nm) {
    this.spec_nm = spec_nm;
  }
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

