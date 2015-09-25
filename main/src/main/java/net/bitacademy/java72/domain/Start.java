package net.bitacademy.java72.domain;

import java.io.Serializable;
import java.sql.Date;

public class Start implements Serializable {

	private static final long serialVersionUID = 1L;

	protected int parti_no; 
	protected int memb_no;
	protected String lat;
	protected String lon;
	protected String status;
	protected Date createDate;

	public int getParti_no() {
		return parti_no;
	}
	public void setParti_no(int parti_no) {
		this.parti_no = parti_no;
	}
	public int getMemb_no() {
		return memb_no;
	}
	public void setMemb_no(int memb_no) {
		this.memb_no = memb_no;
	}
	public String getLat() {
		return lat;
	}
	public void setLat(String lat) {
		this.lat = lat;
	}
	public String getLon() {
		return lon;
	}
	public void setLon(String lon) {
		this.lon = lon;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Date getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

}
