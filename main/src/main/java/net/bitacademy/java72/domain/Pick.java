package net.bitacademy.java72.domain;

import java.io.Serializable;

public class Pick implements Serializable {

	private static final long serialVersionUID = 1L;

	protected int meetNo;
	protected String rcmdPlc;
	protected String lat;
	protected String lon;

	@Override
	public String toString() {
		return "Pick [meetNo=" + meetNo + ", rcmdPlc=" + rcmdPlc + ", lat=" + lat + ", lon=" + lon + "]";
	}
	public int getMeetNo() {
		return meetNo;
	}
	public void setMeetNo(int meetNo) {
		this.meetNo = meetNo;
	}
	public String getRcmdPlc() {
		return rcmdPlc;
	}
	public void setRcmdPlc(String rcmdPlc) {
		this.rcmdPlc = rcmdPlc;
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


}

