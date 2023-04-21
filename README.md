# 서울 7반 A703 자율 프로젝트
# 💊 오뉴 (My Own Nutrient)

## 목차
1. [서비스 소개](#-서비스-소개)
2. [주요 기능](#-주요-기능)
3. [기획](#-기획)
4. [서비스 아키텍쳐](#%EF%B8%8F-서비스-아키텍쳐)
5. [Git 전략 및 컨벤션](#-git-전략-및-컨벤션)


## 💊 서비스 소개

### 개요
- **서비스명: 오뉴**
- **소개: 본인의 영양제 섭취 목적에 맞는 올바른 영양제를 선택하고, 꾸준한 복용으로 이어질 수 있도록 도와주는 서비스**


## 🤗 주요 기능
### 영양제 추천
- **설문조사를 통해 사용자에게 필요한 영양제 추천**
- 기대효과
  - 영양제에 대한 선택지 간소화
  - 나에게 맞는 적합한 영양제 선택
  
![image](https://user-images.githubusercontent.com/110287222/233531371-8b7c9d7a-1856-4cc9-90be-012fce7c9083.png)


### 복용 알림
- **알림 서비스 구독 -> 원하는 시간에 섭취 알림톡 수신 -> 알림톡 링크 클릭 -> 캘린더 체크**
- 기대효과
  - 꾸준한 영양제 복용 유도

![image](https://user-images.githubusercontent.com/110287222/233532722-5a815e4c-5555-44b9-96e9-95171772a9ed.png)

### 영양 분석
- **마이 페이지 혹은 설문에서 현재 복용 중인 영양제를 반영한 영양 성분 그래프 표시**

![추천분석2](https://user-images.githubusercontent.com/110287222/233534732-ad15b6d3-b7b8-4c2f-b305-7905bd4b8aea.gif)

### 제품 비교
- **고민 중인 영양제 선택하여 다른 영양제와 비교 가능**
- 기대효과
  - 자기 주도적 영양제 선택
  
![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/110287222/233534619-61e138a3-dd0c-4c28-a796-a04056797cdf.gif)




## 💻 기획
### ERD
https://www.erdcloud.com/d/PmD3cgGfv76aYTXxT
![image](https://user-images.githubusercontent.com/110287222/233533959-eb162c16-051b-45ba-be50-ec29c12e6721.png)


### Figma
https://www.figma.com/file/BxdV1dLGmP6Vj4AXDauJBO/A703?node-id=0-1&t=sClrQLqVYlRlpm3A-0
![image](https://user-images.githubusercontent.com/110287222/233533811-0bcc9e11-21f5-43ec-841c-32405c1d40db.png)

<br/>

## ⚙️ 서비스 아키텍쳐
![image](https://user-images.githubusercontent.com/110287222/233531797-26ec4ff9-f82d-4a96-9576-d33399c0df9f.png)

<br/>

## 🌟 Git 전략 및 컨벤션
### Git 전략
```
master -> develop -> backend  -> be/feature/기능명
master -> develop -> frontend -> fe/feature/기능명

Merge
기능 branch 개발 완료 => backend or frontend 각 파트 branch에 Pull request => 팀 확인 및 각 파트 리더 merge 승인
- ex) be/feature/login 개발 완료 ⇒ backend에 Pull Request ⇒ 팀 확인 및 backend 리더 merge 승인

이후 정상작동 확인 후 Git 담당자가 develop에 merge 작업 수행,  develop => master에 merge 작업 수행 
```
### Git 컨벤션
```
[이슈번호] BEorFE/태그종류: (작업한 내용 동사형) 작업내용
- ex) [이슈번호] BE/Fix: Resolve getUser function NullPointerException error
- ex) [이슈번호] FE/Feat : Add find password function

본문(바디) 내용 작성 시 이번 커밋과 관련하여 수행한 내용 한글로 상세하게 작성
```
**태그종류**
| 태그 이름 | 설명 |
| --- | --- |
| Feat | 새로운 기능 추가 |
| Design | CSS, UI 등 디자인 관련 작업 |
| Style | 코드 포맷팅, 세미 콜론 누락 등 |
| Test | 테스트 코드 추가 및 리팩토링 (테스트 이외 코드 변경 X) |
| Fix | 버그 수정 |
| Rename | 파일 혹은 폴더명 수정한 경우 |
| Remove | 파일 삭제하는 작업 수행한 경우 |
| Comment | 주석 추가 및 변경 |
| Refactor | 코드 리팩토링 |
| Docs | 문서 수정한 경우 |
