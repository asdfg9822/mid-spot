package net.bitacademy.java72.domain;

import java.io.Serializable;

public class Member implements Serializable {
	private static final long serialVersionUID = 1L;

	protected int memberNo;
	protected String name;
	protected String email;
	protected String userId;
	protected String getSite;
	protected String addressNo;
	protected String addressDetail;
	protected String imgUrl;
	
	@Override
	public String toString() {
		return "Member [memberNo=" + memberNo + ", name=" + name + ", email=" + email + ", userId=" + userId
				+ ", getSite=" + getSite + ", addressNo=" + addressNo + ", addressDetail=" + addressDetail + ", imgUrl="
				+ imgUrl + "]";
	}

	public String getGetSite() {
		return getSite;
	}

	public void setGetSite(String getSite) {
		this.getSite = getSite;
	}

	public int getMemberNo() {
		return memberNo;
	}

	public void setMemberNo(int memberNo) {
		this.memberNo = memberNo;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getAddressNo() {
		return addressNo;
	}

	public void setAddressNo(String addressNo) {
		this.addressNo = addressNo;
	}

	public String getAddressDetail() {
		return addressDetail;
	}

	public void setAddressDetail(String addressDetail) {
		this.addressDetail = addressDetail;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

}
