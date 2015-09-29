-- 업체
CREATE TABLE COMP_TB (
	COMP_NO   INTEGER      NOT NULL COMMENT '업체번호', -- 업체번호
	KAKAO_NO  INTEGER      NULL     COMMENT '카카오에서 받아온 지도 ID', -- 카카오에서 받아온 지도 ID
	COMP_NM   VARCHAR(50)  NOT NULL COMMENT '업체 이름', -- 업체 이름
	ADMIN_TEL VARCHAR(30)  NOT NULL COMMENT '관리자 전화번호', -- 관리자 전화번호
	COMP_TEL  VARCHAR(30)  NOT NULL COMMENT '업체 전화번호', -- 업체 전화번호
	ELEV_BL   BOOLEAN      NOT NULL COMMENT '엘레베이터 여부', -- 엘레베이터 여부
	GROUND_BL BOOLEAN      NOT NULL COMMENT '위치(지상,지하)', -- 위치(지상,지하)
	WEB_BL    BOOLEAN      NOT NULL COMMENT '홈페이지 유/무', -- 홈페이지 유/무
	WEB_ADDR  VARCHAR(255) NULL     COMMENT '홈페이지 주소', -- 홈페이지 주소
	OPEN_DT   DATETIME     NOT NULL COMMENT '영업시작시간', -- 영업시작시간
	CLOSE_DT  DATETIME     NOT NULL COMMENT '영업마감시간', -- 영업마감시간
	POST_NO   VARCHAR(255) NULL     COMMENT '우편번호', -- 우편번호
	ADDR_NO   VARCHAR(255) NULL     COMMENT '주소번호', -- 주소번호
	ADDR_OLD  VARCHAR(255) NULL     COMMENT '구주소', -- 구주소
	ADDR_NEW  VARCHAR(255) NULL     COMMENT '신주소', -- 신주소
	LAT       VARCHAR(30)  NOT NULL COMMENT '위도', -- 위도
	LON       VARCHAR(30)  NOT NULL COMMENT '경도' -- 경도
)
COMMENT '업체';

-- 업체
ALTER TABLE COMP_TB
	ADD CONSTRAINT PK_COMP_TB -- 업체 기본키
		PRIMARY KEY (
			COMP_NO -- 업체번호
		);

-- 업체 유니크 인덱스
CREATE UNIQUE INDEX UIX_COMP_TB
	ON COMP_TB ( -- 업체
		KAKAO_NO ASC -- 카카오에서 받아온 지도 ID
	);

ALTER TABLE COMP_TB
	MODIFY COLUMN COMP_NO INTEGER NOT NULL AUTO_INCREMENT COMMENT '업체번호';

-- 업체스펙
CREATE TABLE COMP_SPEC_TB (
	SPEC_NO INTEGER      NOT NULL COMMENT '스펙 번호', -- 스펙 번호
	COMP_NO INTEGER      NOT NULL COMMENT '업체번호', -- 업체번호
	SPEC_VL VARCHAR(255) NOT NULL COMMENT '스펙값' -- 스펙값
)
COMMENT '업체스펙';

-- 업체스펙
ALTER TABLE COMP_SPEC_TB
	ADD CONSTRAINT PK_COMP_SPEC_TB -- 업체스펙 기본키
		PRIMARY KEY (
			SPEC_NO, -- 스펙 번호
			COMP_NO  -- 업체번호
		);

-- 회원
CREATE TABLE MEMB_TB (
	MEMB_NO   INTEGER      NOT NULL COMMENT '회원번호', -- 회원번호
	EMAIL     VARCHAR(40)  NOT NULL COMMENT '이메일', -- 이메일
	MEMB_NM   VARCHAR(255) NOT NULL COMMENT '이름', -- 이름
	USER_ID   VARCHAR(255) NOT NULL COMMENT '사용자외부번호', -- 사용자외부번호
	GET_SITE  VARCHAR(255) NULL     COMMENT '추후 NULL', -- 가져온 사이트
	ADDR_NO   VARCHAR(255) NULL     COMMENT '주소번호', -- 주소번호
	ADDR_DET  VARCHAR(255) NULL     COMMENT '상세주소', -- 상세주소
	FILE_PATH VARCHAR(255) NULL     COMMENT '사진경로' -- 사진경로
)
COMMENT '회원';

-- 회원
ALTER TABLE MEMB_TB
	ADD CONSTRAINT PK_MEMB_TB -- 회원 기본키
		PRIMARY KEY (
			MEMB_NO -- 회원번호
		);

-- 회원 유니크 인덱스
CREATE UNIQUE INDEX UIX_MEMB_TB
	ON MEMB_TB ( -- 회원
		EMAIL ASC -- 이메일
	);

-- 회원 인덱스
CREATE INDEX IX_MEMB_TB
	ON MEMB_TB( -- 회원
	);

ALTER TABLE MEMB_TB
	MODIFY COLUMN MEMB_NO INTEGER NOT NULL AUTO_INCREMENT COMMENT '회원번호';

-- 업체사진
CREATE TABLE COMP_IMG_TB (
	IMG_NO   INTEGER      NOT NULL COMMENT '사진번호', -- 사진번호
	COMP_NO  INTEGER      NOT NULL COMMENT '업체번호', -- 업체번호
	IMG_PATH VARCHAR(255) NOT NULL COMMENT '사진경로' -- 사진경로
)
COMMENT '업체사진';

-- 업체사진
ALTER TABLE COMP_IMG_TB
	ADD CONSTRAINT PK_COMP_IMG_TB -- 업체사진 기본키
		PRIMARY KEY (
			IMG_NO -- 사진번호
		);

ALTER TABLE COMP_IMG_TB
	MODIFY COLUMN IMG_NO INTEGER NOT NULL AUTO_INCREMENT COMMENT '사진번호';

-- 모임
CREATE TABLE MEET_TB (
	MEET_NO INTEGER      NOT NULL COMMENT '모임번호', -- 모임번호
	MEMB_NO INTEGER      NULL     COMMENT '회원번호', -- 회원번호
	MEET_NM VARCHAR(255) NOT NULL COMMENT '모임 이름', -- 모임 이름
	MEET_DT DATETIME     NOT NULL COMMENT '약속시간', -- 약속시간
	COMP_NO INTEGER      NULL     COMMENT '확정업체번호' -- 확정업체번호
)
COMMENT '모임';

-- 모임
ALTER TABLE MEET_TB
	ADD CONSTRAINT PK_MEET_TB -- 모임 기본키
		PRIMARY KEY (
			MEET_NO -- 모임번호
		);

ALTER TABLE MEET_TB
	MODIFY COLUMN MEET_NO INTEGER NOT NULL AUTO_INCREMENT COMMENT '모임번호';

-- 클래스
CREATE TABLE CATE_TB (
	CATE_NO INTEGER     NOT NULL COMMENT '카테고리일련번호', -- 카테고리일련번호
	CATE_NM VARCHAR(50) NOT NULL COMMENT '카테고리명', -- 카테고리명
	CATE_DP INTEGER     NULL     COMMENT '카테고리 단계' -- 카테고리 단계
)
COMMENT '클래스';

-- 클래스
ALTER TABLE CATE_TB
	ADD CONSTRAINT PK_CATE_TB -- 클래스 기본키
		PRIMARY KEY (
			CATE_NO -- 카테고리일련번호
		);

-- 클래스 유니크 인덱스
CREATE UNIQUE INDEX UIX_CATE_TB
	ON CATE_TB ( -- 클래스
		CATE_NM ASC -- 카테고리명
	);

ALTER TABLE CATE_TB
	MODIFY COLUMN CATE_NO INTEGER NOT NULL AUTO_INCREMENT COMMENT '카테고리일련번호';

-- 카테고리
CREATE TABLE CATE_TB (
	CATE_NO      INTEGER     NOT NULL COMMENT '카테고리일련번호', -- 카테고리일련번호
	CATE_NM      VARCHAR(50) NULL     COMMENT '카테고리명', -- 카테고리명
	CATE_LIST_NO INTEGER     NULL     COMMENT '리스팅순서' -- 리스팅순서
)
COMMENT '카테고리';

-- 카테고리
ALTER TABLE CATE_TB
	ADD CONSTRAINT PK_CATE_TB -- 카테고리 기본키
		PRIMARY KEY (
			CATE_NO -- 카테고리일련번호
		);

ALTER TABLE CATE_TB
	MODIFY COLUMN CATE_NO INTEGER NOT NULL AUTO_INCREMENT COMMENT '카테고리일련번호';

-- 업체클래스
CREATE TABLE COMP_CATE_TB (
	COMP_NO INTEGER NOT NULL COMMENT '업체번호', -- 업체번호
	CATE_NO INTEGER NOT NULL COMMENT '카테고리일련번호' -- 카테고리일련번호
)
COMMENT '업체클래스';

-- 업체클래스
ALTER TABLE COMP_CATE_TB
	ADD CONSTRAINT PK_COMP_CATE_TB -- 업체클래스 기본키
		PRIMARY KEY (
			COMP_NO, -- 업체번호
			CATE_NO  -- 카테고리일련번호
		);

-- 추천클래스
CREATE TABLE RCMD_CATE_TB (
	MEET_NO INTEGER NOT NULL COMMENT '모임번호', -- 모임번호
	CATE_NO INTEGER NOT NULL COMMENT '카테고리일련번호' -- 카테고리일련번호
)
COMMENT '추천클래스';

-- 추천클래스
ALTER TABLE RCMD_CATE_TB
	ADD CONSTRAINT PK_RCMD_CATE_TB -- 추천클래스 기본키
		PRIMARY KEY (
			MEET_NO, -- 모임번호
			CATE_NO  -- 카테고리일련번호
		);

-- 참여자
CREATE TABLE PARTI_TB (
	PARTI_NO  INTEGER     NOT NULL COMMENT '모임번호', -- 모임번호
	MEMB_NO   INTEGER     NOT NULL COMMENT '회원번호', -- 회원번호
	LAT       VARCHAR(30) NULL     COMMENT '위도', -- 위도
	LON       VARCHAR(30) NULL     COMMENT '경도', -- 경도
	STATUS    CHAR(1)     NULL     COMMENT '상태', -- 상태
	NOTICE_DT DATETIME    NULL     COMMENT '알림일자' -- 알림일자
)
COMMENT '참여자';

-- 참여자
ALTER TABLE PARTI_TB
	ADD CONSTRAINT PK_PARTI_TB -- 참여자 기본키
		PRIMARY KEY (
			PARTI_NO, -- 모임번호
			MEMB_NO   -- 회원번호
		);

-- 좋아요업체
CREATE TABLE LIKE_COMP_TB (
	PARTI_NO INTEGER NOT NULL COMMENT '모임번호', -- 모임번호
	MEMB_NO  INTEGER NOT NULL COMMENT '회원번호', -- 회원번호
	COMP_NO  INTEGER NOT NULL COMMENT '업체번호' -- 업체번호
)
COMMENT '좋아요업체';

-- 좋아요업체
ALTER TABLE LIKE_COMP_TB
	ADD CONSTRAINT PK_LIKE_COMP_TB -- 좋아요업체 기본키
		PRIMARY KEY (
			PARTI_NO, -- 모임번호
			MEMB_NO,  -- 회원번호
			COMP_NO   -- 업체번호
		);

-- 추천장소
CREATE TABLE RCMD_PLC_TB (
	MEET_NO  INTEGER      NULL COMMENT '모임번호', -- 모임번호
	RCMD_PLC VARCHAR(255) NULL COMMENT '추천장소', -- 추천장소
	LAT      VARCHAR(30)  NULL COMMENT '위도', -- 위도
	LON      VARCHAR(30)  NULL COMMENT '경도' -- 경도
)
COMMENT '추천장소';

-- 스펙 상세
CREATE TABLE SPEC_TB (
	SPEC_NO  INTEGER      NOT NULL COMMENT '스펙 번호', -- 스펙 번호
	CATE_NO  INTEGER      NOT NULL COMMENT '카테고리일련번호', -- 카테고리일련번호
	SPEC_NM  VARCHAR(255) NOT NULL COMMENT '스펙이름', -- 스펙이름
	PRIORITY INTEGER      NOT NULL COMMENT '스펙의 우선순위' -- 스펙의 우선순위
)
COMMENT '스펙 상세';

-- 스펙 상세
ALTER TABLE SPEC_TB
	ADD CONSTRAINT PK_SPEC_TB -- 스펙 상세 기본키
		PRIMARY KEY (
			SPEC_NO -- 스펙 번호
		);

ALTER TABLE SPEC_TB
	MODIFY COLUMN SPEC_NO INTEGER NOT NULL AUTO_INCREMENT COMMENT '스펙 번호';

-- 업체스펙
ALTER TABLE COMP_SPEC_TB
	ADD CONSTRAINT FK_COMP_TB_TO_COMP_SPEC_TB -- 업체 -> 업체스펙
		FOREIGN KEY (
			COMP_NO -- 업체번호
		)
		REFERENCES COMP_TB ( -- 업체
			COMP_NO -- 업체번호
		);

-- 업체스펙
ALTER TABLE COMP_SPEC_TB
	ADD CONSTRAINT FK_SPEC_TB_TO_COMP_SPEC_TB -- 스펙 상세 -> 업체스펙
		FOREIGN KEY (
			SPEC_NO -- 스펙 번호
		)
		REFERENCES SPEC_TB ( -- 스펙 상세
			SPEC_NO -- 스펙 번호
		);

-- 업체사진
ALTER TABLE COMP_IMG_TB
	ADD CONSTRAINT FK_COMP_TB_TO_COMP_IMG_TB -- 업체 -> 업체사진
		FOREIGN KEY (
			COMP_NO -- 업체번호
		)
		REFERENCES COMP_TB ( -- 업체
			COMP_NO -- 업체번호
		);

-- 모임
ALTER TABLE MEET_TB
	ADD CONSTRAINT FK_MEMB_TB_TO_MEET_TB -- 회원 -> 모임
		FOREIGN KEY (
			MEMB_NO -- 회원번호
		)
		REFERENCES MEMB_TB ( -- 회원
			MEMB_NO -- 회원번호
		);

-- 모임
ALTER TABLE MEET_TB
	ADD CONSTRAINT FK_COMP_TB_TO_MEET_TB -- 업체 -> 모임
		FOREIGN KEY (
			COMP_NO -- 확정업체번호
		)
		REFERENCES COMP_TB ( -- 업체
			COMP_NO -- 업체번호
		);

-- 업체클래스
ALTER TABLE COMP_CATE_TB
	ADD CONSTRAINT FK_COMP_TB_TO_COMP_CATE_TB -- 업체 -> 업체클래스
		FOREIGN KEY (
			COMP_NO -- 업체번호
		)
		REFERENCES COMP_TB ( -- 업체
			COMP_NO -- 업체번호
		);

-- 업체클래스
ALTER TABLE COMP_CATE_TB
	ADD CONSTRAINT FK_CATE_TB_TO_COMP_CATE_TB -- 클래스 -> 업체클래스
		FOREIGN KEY (
			CATE_NO -- 카테고리일련번호
		)
		REFERENCES CATE_TB ( -- 클래스
			CATE_NO -- 카테고리일련번호
		);

-- 추천클래스
ALTER TABLE RCMD_CATE_TB
	ADD CONSTRAINT FK_MEET_TB_TO_RCMD_CATE_TB -- 모임 -> 추천클래스
		FOREIGN KEY (
			MEET_NO -- 모임번호
		)
		REFERENCES MEET_TB ( -- 모임
			MEET_NO -- 모임번호
		);

-- 추천클래스
ALTER TABLE RCMD_CATE_TB
	ADD CONSTRAINT FK_CATE_TB_TO_RCMD_CATE_TB -- 클래스 -> 추천클래스
		FOREIGN KEY (
			CATE_NO -- 카테고리일련번호
		)
		REFERENCES CATE_TB ( -- 클래스
			CATE_NO -- 카테고리일련번호
		);

-- 참여자
ALTER TABLE PARTI_TB
	ADD CONSTRAINT FK_MEET_TB_TO_PARTI_TB -- 모임 -> 참여자
		FOREIGN KEY (
			PARTI_NO -- 모임번호
		)
		REFERENCES MEET_TB ( -- 모임
			MEET_NO -- 모임번호
		);

-- 참여자
ALTER TABLE PARTI_TB
	ADD CONSTRAINT FK_MEMB_TB_TO_PARTI_TB -- 회원 -> 참여자
		FOREIGN KEY (
			MEMB_NO -- 회원번호
		)
		REFERENCES MEMB_TB ( -- 회원
			MEMB_NO -- 회원번호
		);

-- 좋아요업체
ALTER TABLE LIKE_COMP_TB
	ADD CONSTRAINT FK_MEET_TB_TO_LIKE_COMP_TB -- 모임 -> 좋아요업체
		FOREIGN KEY (
			PARTI_NO -- 모임번호
		)
		REFERENCES MEET_TB ( -- 모임
			MEET_NO -- 모임번호
		);

-- 좋아요업체
ALTER TABLE LIKE_COMP_TB
	ADD CONSTRAINT FK_PARTI_TB_TO_LIKE_COMP_TB -- 참여자 -> 좋아요업체
		FOREIGN KEY (
			PARTI_NO, -- 모임번호
			MEMB_NO   -- 회원번호
		)
		REFERENCES PARTI_TB ( -- 참여자
			PARTI_NO, -- 모임번호
			MEMB_NO   -- 회원번호
		);

-- 좋아요업체
ALTER TABLE LIKE_COMP_TB
	ADD CONSTRAINT FK_COMP_TB_TO_LIKE_COMP_TB -- 업체 -> 좋아요업체
		FOREIGN KEY (
			COMP_NO -- 업체번호
		)
		REFERENCES COMP_TB ( -- 업체
			COMP_NO -- 업체번호
		);

-- 추천장소
ALTER TABLE RCMD_PLC_TB
	ADD CONSTRAINT FK_MEET_TB_TO_RCMD_PLC_TB -- 모임 -> 추천장소
		FOREIGN KEY (
			MEET_NO -- 모임번호
		)
		REFERENCES MEET_TB ( -- 모임
			MEET_NO -- 모임번호
		);

-- 스펙 상세
ALTER TABLE SPEC_TB
	ADD CONSTRAINT FK_CATE_TB_TO_SPEC_TB -- 클래스 -> 스펙 상세
		FOREIGN KEY (
			CATE_NO -- 카테고리일련번호
		)
		REFERENCES CATE_TB ( -- 클래스
			CATE_NO -- 카테고리일련번호
		);
