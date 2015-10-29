package net.bitacademy.java72.domain;

import java.io.Serializable;

public class Subway implements Serializable {

	private static final long serialVersionUID = 1L;

	protected int subNo;
	protected String subName;
	protected String lat;
	protected String lon;
	protected String distance;
	protected int timeAvg;
	
	public String getDistance() {
		return distance;
	}

	public void setDistance(String distance) {
		this.distance = distance;
	}

	public int getTimeAvg() {
		return timeAvg;
	}

	public void setTimeAvg(int timeAvg) {
		this.timeAvg = timeAvg;
	}

	public int getSubNo() {
		return subNo;
	}

	public void setSubNo(int subNo) {
		this.subNo = subNo;
	}

	public String getSubName() {
		return subName;
	}

	public void setSubName(String subName) {
		this.subName = subName;
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
		return "Subway [subNo=" + subNo + ", subName=" + subName + ", lat=" + lat + ", lon=" + lon + ", distance="
				+ distance + ", timeAvg=" + timeAvg + "]";
	}

}
