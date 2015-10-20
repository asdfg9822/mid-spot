package net.bitacademy.java72.domain;

import java.io.Serializable;
import java.sql.Date;

public class Cate implements Serializable {

	private static final long serialVersionUID = 1L;

	protected int meetNo;
	protected int cateNo;
	protected String cateNm;

	@Override
	public String toString() {
		return "Cate [meetNo=" + meetNo + ", cateNo=" + cateNo + ", cateNm2=" + cateNm + "]";
	}

	public int getMeetNo() {
		return meetNo;
	}
	public void setMeetNo(int meetNo) {
		this.meetNo = meetNo;
	}
	public int getCateNo() {
		return cateNo;
	}
	public void setCateNo(int cateNo) {
		this.cateNo = cateNo;
	}
	public String getCateNm() {
		return cateNm;
	}
	public void setCateNm(String cateNm) {
		this.cateNm = cateNm;
	}




}
