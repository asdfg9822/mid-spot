###################
#DATABASE : midspot 
###################


#TABLE : COMP_TB (회사 정보)
#TABLE : COMP_IMG_TB (회사 이미지 정보)
#TABLE : CATE_TB (카테고리 정보)
#TABLE : COMP_CATE_TB (회사 카테고리 정보)
html/company_info_write.html 을 이용해서 데이터 입력 


#TABLE : MEMB_TB (멤버 정보) 
insert into memb_tb(email, memb_nm, user_id, get_site, addr_no, addr_det, file_path) values('user1@test.com','user1',1,'FACEBOOK',null,null,'http://simpleicon.com/wp-content/uploads/business-man-3.png');
insert into memb_tb(email, memb_nm, user_id, get_site, addr_no, addr_det, file_path) values('user2@test.com','user2',2,'FACEBOOK',null,null,'http://simpleicon.com/wp-content/uploads/business-man-3.png');
insert into memb_tb(email, memb_nm, user_id, get_site, addr_no, addr_det, file_path) values('user3@test.com','user3',3,'FACEBOOK',null,null,'http://simpleicon.com/wp-content/uploads/business-man-3.png');
insert into memb_tb(email, memb_nm, user_id, get_site, addr_no, addr_det, file_path) values('user4@test.com','user4',4,'KAKAO',null,null,'http://simpleicon.com/wp-content/uploads/business-man-3.png');
insert into memb_tb(email, memb_nm, user_id, get_site, addr_no, addr_det, file_path) values('user5@test.com','user5',5,'KAKAO',null,null,'http://simpleicon.com/wp-content/uploads/business-man-3.png');


#TABLE : SPEC_TB (스펙 상세 정보) 
#TABLE : COMP_SPEC_TB (회사의 스펙 정보)
#TABLE : MEET_TB (모임의 정보) 
#TABLE : PARTI_TB (참가자들의 대한 정보)
#TABLE : RCMD_MEET_TB (모임이 선택한 카테고리)
#TABLE : RCMD_PLC_TB (우리가 추천할 장소 정보 예: 강남역, 신촌역 )
#TABLE : LIKE_COMP_TB (사용자들이 선택한 좋아요 업체)

#SPEC RANDOM 생성 
select cate_no from cate_tb where cate_nm="노래방";

insert into spec_tb(cate_no, spec_nm, priority) values(3,);