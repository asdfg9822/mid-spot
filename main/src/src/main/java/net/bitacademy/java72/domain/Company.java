package net.bitacademy.java72.domain;

import java.io.Serializable;

/* 값을 실어 나르는 클래스(Data Transfer Object)
 * => 값을 표현하는 클래스
 * => 특정 업무 영역의 데이터를 표현한다고 해서 Business Domain Object라고도 한다.
 * => 줄여서 Domain Object 객체라고 한다.
 * 
 * 인터페이스
 * => 클래스의 데이터를 바이트 배열로 직렬화할 수 있음을 표시할 때 사용.
 * => 메서드가 없다. 단지 JVM에게 직렬화를 허용한다고 표시하는 용도로 사용한다.
 */
public class Company implements Serializable {

	/*
	 * 질력화될 때 데이터의 버전 정보도 함께 저장된다. 나중에 바이트 배열을 다시 객체로 복원할 때, 버전을 검사하는 데 사용한다.
	 */
	private static final long serialVersionUID = 1L;

	protected int no;
	protected int kakaoId;
	protected String companyName;
	protected String adminTel;
	//protected String openingHour;
	//protected String closeingHour;
	protected String addressOld;
	protected String addressNew;
	protected String lat;
	protected String lon;
	protected boolean isElevator;
	protected boolean isWebPage;
	protected boolean onGround;
	protected String imgUrl;
	protected String imgNo;
	protected float distance;
	protected int likeCnt;
	protected int isLike;


	@Override
	public String toString() {
		return "Company [no=" + no + ", kakaoId=" + kakaoId + ", companyName=" + companyName + ", adminTel=" + adminTel
				+ ", addressOld=" + addressOld + ", addressNew=" + addressNew + ", lat=" + lat + ", lon=" + lon
				+ ", isElevator=" + isElevator + ", isWebPage=" + isWebPage + ", onGround=" + onGround + ", imgUrl="
				+ imgUrl + ", imgNo=" + imgNo + ", distance=" + distance + ", likeCnt=" + likeCnt + "]";
	}

	
	public int getIsLike() {
		return isLike;
	}

	public void setIsLike(int isLike) {
		this.isLike = isLike;
	}




	public int getLikeCnt() {
		return likeCnt;
	}



	public void setLikeCnt(int likeCnt) {
		this.likeCnt = likeCnt;
	}



	public float getDistance() {
		return distance;
	}



	public void setDistance(float distance) {
		this.distance = distance;
	}



	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public String getImgNo() {
		return imgNo;
	}

	public void setImgNo(String imgNo) {
		this.imgNo = imgNo;
	}

	public String getAddressOld() {
		return addressOld;
	}

	public void setAddressOld(String addressOld) {
		this.addressOld = addressOld;
	}

	public String getAddressNew() {
		return addressNew;
	}

	public void setAddressNew(String addressNew) {
		this.addressNew = addressNew;
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

	public boolean isElevator() {
		return isElevator;
	}

	public void setElevator(boolean isElevator) {
		this.isElevator = isElevator;
	}

	public boolean isWebPage() {
		return isWebPage;
	}

	public void setWebPage(boolean isWebPage) {
		this.isWebPage = isWebPage;
	}

	public boolean isOnGround() {
		return onGround;
	}

	public void setOnGround(boolean onGround) {
		this.onGround = onGround;
	}



	public int getNo() {
		return no;
	}

	public void setNo(int no) {
		this.no = no;
	}

	public int getKakaoId() {
		return kakaoId;
	}

	public void setKakaoId(int kakaoId) {
		this.kakaoId = kakaoId;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getAdminTel() {
		return adminTel;
	}

	public void setAdminTel(String adminTel) {
		this.adminTel = adminTel;
	}

}

