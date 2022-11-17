# 항해 C반 9조 1주차 미니프로젝트<br>
<br>

# 🎞 THEATER 🕶<br>
**언제, 어디서나, 편리하게 만나는 생생한 예술의 감동!**<br>
영화를 보는 사람은 많지만 연극과 같이 문화 예술 공연을 보는 사람은 적다.<br>
**연극, 클래식, 전시와 같은 문화를 자주 접해보지 않는 사람들을 위해 <br>
먼저 문화 예술 공연을 경험해 본 사람들이 간단한 정보를 알려주기 위해 만들어진 웹사이트<br>**
<br>

# 📕 와이어프레임 사진
![image](https://user-images.githubusercontent.com/85012454/202397510-c41e0a42-a463-4330-81ad-5e7ae76f0035.png)
<br>
<br>


# 📆개발 기간
2022년 11월 14일 ~ 2022년 11월 17일<br>
<br>

# 👯팀원
- 팀장: 정소영
- 팀원: 김소라
- 팀원: 권성현
- 팀원: 김수예

# 🛠️기술 스택<br>
HTML, CSS, JS<br>
Python<br>
MongoDB<br>
Flask<br>
JWT<br>
<br>

# 💡구현 기능<br>
- 회원가입
- 로그인, 로그아웃
- 아이디 중복확인, 아이디/비밀번호 형식 확인
- openApi(문화공연 정보)를 이용한 공연 정보 가져오기
- 공연정보를 카테고리별로 나누어 보여주기
- 공연정보에 대한 리뷰 등록하기
- 마이페이지에서 유저가 등록한 리뷰를 모아 보여주기
<br>
<br>

# 📕 **API (개발해야 하는 기능들)**
| 기능 | Method | URL | request | response |
| --- | --- | --- | --- | --- |
| 로그인 | POST | api/login | { ‘id’ : id, ‘pw’ : pw } | 로그인정보 |
| 로그아웃 | POST | api/logout |  |  |
| 회원가입 | POST | api/signup | { ‘id’ : id } |  |
| 아이디중복 | POST | api/check_id | { ‘id’ : id } | { true / false } |
| 메인페이지 리스트 보여주기 | GET | main | { ’TITLE’: TITLE, ‘DATE’:DATE, ‘MAIN_IMG’:MAIN_IMG, ‘ORG_LINK’: ORG_LINK, ‘THEMACODE’: THEMACODE } | 리스트 정보 |
| 메인페이지 APi저장 | POST | main | ALL  | 저장완료 메세지 |
| 메인페이지 검색 | POST | main/info | { ‘query’ = 검색어} | 검색결과 리스트 |
| 세부페이지 데이터 보여주기 | GET | detail | { ’TITLE’: TITLE, ‘DATE’:DATE, ‘MAIN_IMG’:MAIN_IMG, ‘ORG_LINK’: ORG_LINK, ‘THEMACODE’: THEMACODE, ‘id’ : id, ‘comment’ : comment  } | 리스트 정보, 리스트에 해당하는 코멘트 정보 |
| 세부페이지 코멘트 DB저장 | POST | detail | { ‘id’ : id , ‘comment’ : comment } |  |


## 서울시 openAPI를 사용해 간단한 프로그램 만들기.<br>
서울시 openAPI (문화공연정보) <br>
https://data.seoul.go.kr/dataList/OA-15486/S/1/datasetView.do<br>
