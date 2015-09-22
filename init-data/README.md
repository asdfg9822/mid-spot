

# [Introduction] init-data
 - mid-spot 프로젝트의 초기 데이터 값을 넣는 프로젝트입니다.  


## Usage

1. Database를 생성
 - 'midspot'를 생성합니다. (또는 다른 이름을 설정할 경우 routes/company.js에서 db를 변경해도 됩니다)  
 - Table을 생성합니다. (Table 구조는 database/db_modelling, 생성 쿼리는 database/create_table_query.sql 에 정의되어 있습니다)
 
2. 데이터 입력 
 - html/company_info_write.html을 로컬에서 사용합니다.  
 - 웹 페이지에서 'Init' 버튼을 클릭하면 초기 입력해놓은 업체(다음 API 키워드 검색)의 데이터가 Insert 됩니다. 
 - 웹 페이지에서 원하는 키워드로 'company'의 정보를 입력할 수 있습니다. 


