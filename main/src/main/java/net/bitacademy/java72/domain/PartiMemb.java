package net.bitacademy.java72.domain;

import java.io.Serializable;

public class PartiMemb implements Serializable {

	private static final long serialVersionUID = 1L;

	protected int partiNo; 
	protected int membNo; 
	protected String membNm;
	protected String email;
	protected String getSite;
	protected String addressNo;
	protected String addressDet;
	protected String imageUrl;
	protected String lat;
	protected String lon;
	protected String status;
	protected String noticeDate;
	
	
	public int getPartiNo() {
		return partiNo;
	}
	public void setPartiNo(int partiNo) {
		this.partiNo = partiNo;
	}
	public int getMembNo() {
		return membNo;
	}
	public void setMembNo(int membNo) {
		this.membNo = membNo;
	}
	public String getMembNm() {
		return membNm;
	}
	public void setMembNm(String membNm) {
		this.membNm = membNm;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getGetSite() {
		return getSite;
	}
	public void setGetSite(String getSite) {
		this.getSite = getSite;
	}
	public String getAddressNo() {
		return addressNo;
	}
	public void setAddressNo(String addressNo) {
		this.addressNo = addressNo;
	}
	public String getAddressDet() {
		return addressDet;
	}
	public void setAddressDet(String addressDet) {
		this.addressDet = addressDet;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
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
	public String getNoticeDate() {
		return noticeDate;
	}
	public void setNoticeDate(String noticeDate) {
		this.noticeDate = noticeDate;
	}
	@Override
	public String toString() {
		return "PartiMemb [partiNo=" + partiNo + ", membNo=" + membNo + ", membNm=" + membNm + ", email=" + email
				+ ", getSite=" + getSite + ", addressNo=" + addressNo + ", addressDet=" + addressDet + ", imageUrl="
				+ imageUrl + ", lat=" + lat + ", lon=" + lon + ", status=" + status + ", noticeDate=" + noticeDate
				+ "]";
	}
}
