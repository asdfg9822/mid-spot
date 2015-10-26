package net.bitacademy.java72.domain;

import java.io.Serializable;

public class PartiOrigin implements Serializable {
	private static final long serialVersionUID = 1L;

	protected int partiNo;
	protected int memberNo;
	protected String lat;
	protected String lon;

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
	@Override
	public String toString() {
		return "PartiOrigin [partiNo=" + partiNo + ", memberNo=" + memberNo + ", lat=" + lat + ", lon=" + lon + "]";
	}

}
