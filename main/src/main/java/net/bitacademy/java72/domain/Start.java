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
	protected String memb_nm;
	protected String email;
	protected String get_site;
	protected String file_path;
	protected String meet_nm;
	protected Date meet_dt;
	
	
	
	public String getMeet_nm() {
    return meet_nm;
  }
  public void setMeet_nm(String meet_nm) {
    this.meet_nm = meet_nm;
  }
  public Date getMeet_dt() {
    return meet_dt;
  }
  public void setMeet_dt(Date meet_dt) {
    this.meet_dt = meet_dt;
  }
	public String getMemb_nm() {
    return memb_nm;
  }
  public void setMemb_nm(String memb_nm) {
    this.memb_nm = memb_nm;
  }
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  public String getGet_site() {
    return get_site;
  }
  public void setGet_site(String get_site) {
    this.get_site = get_site;
  }
  public String getFile_path() {
    return file_path;
  }
  public void setFile_path(String file_path) {
    this.file_path = file_path;
  }

	@Override
	public String toString() {
		return "Start [parti_no=" + parti_no + ", memb_no=" + memb_no + ", lat=" + lat + ", lon=" + lon + ", status="
				+ status + ", createDate=" + createDate + "]";
	}
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
