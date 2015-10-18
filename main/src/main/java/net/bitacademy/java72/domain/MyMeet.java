package net.bitacademy.java72.domain;

import java.io.Serializable;
import java.util.List;

public class MyMeet implements Serializable {
	private static final long serialVersionUID = 1L;

	// User Participant Meet
	protected int memberNo; // parti_tb.memb_no

	// Meet Info
	protected int meetNo; // meet_tb.meet_no
	protected String meetName; // meet_tb.meet_nm
	protected String meetDate; // meet_tb.meet_dt

	// Meet Master Info
	protected int masterNo; // meet_tb.memb_no
	protected String masterName; // memb_tb.memb_nm
	protected List<PartiMemb> partiList;

	@Override
	public String toString() {
		return "MyMeet [memberNo=" + memberNo + ", meetNo=" + meetNo + ", meetName=" + meetName + ", meetDate="
				+ meetDate + ", masterNo=" + masterNo + ", masterName=" + masterName + ", partiList=" + partiList + "]";
	}

	public List<PartiMemb> getPartiList() {
		return partiList;
	}

	public void setPartiList(List<PartiMemb> partiList) {
		this.partiList = partiList;
	}

	public int getMemberNo() {
		return memberNo;
	}

	public void setMemberNo(int memberNo) {
		this.memberNo = memberNo;
	}

	public int getMeetNo() {
		return meetNo;
	}

	public void setMeetNo(int meetNo) {
		this.meetNo = meetNo;
	}

	public String getMeetName() {
		return meetName;
	}

	public void setMeetName(String meetName) {
		this.meetName = meetName;
	}

	public String getMeetDate() {
		return meetDate;
	}

	public void setMeetDate(String meetDate) {
		this.meetDate = meetDate;
	}

	public int getMasterNo() {
		return masterNo;
	}

	public void setMasterNo(int masterNo) {
		this.masterNo = masterNo;
	}

	public String getMasterName() {
		return masterName;
	}

	public void setMasterName(String masterName) {
		this.masterName = masterName;
	}



}
