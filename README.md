# STUDYLOG

스터디 기록을 위한 검색 중심 웹플랫폼

---

## 💡 프로젝트 소개

**STUDYLOG**는 사용자들이 학습 내용을 기록하고,  
**태그와 키워드로 쉽게 검색할 수 있는** 심플한 웹 기반 스터디 플랫폼입니다.

본 프로젝트는 **검색 중심 UI/UX**와 **직관적인 구성**을 통해  
학습 경험을 더 효과적으로 기록하고 공유하는 데 초점을 맞추었습니다.

---

## 🛠️ 기술 스택

- **Frontend**: React (Vite 기반)
- **Styling**: Tailwind CSS
- **Language**: JavaScript

---

## 🔍 주요 기능

| 기능 | 설명 |
|------|------|
| 🔎 키워드 검색 | 검색창에 입력한 키워드 기반으로 학습 내용을 조회 |
| 🏷️ 태그 필터링 | 미리 정의된 태그를 선택하여 카테고리별 검색 가능 |
| 🖥️ 반응형 레이아웃 | 모바일/PC 어디서나 보기 쉽게 자동 정렬 |
| 📑 푸터 표시 | 서비스명 및 연도 정보 간단 표기 |
| ✅ 최소 구조 | 라우터/로고 등 피드백 우려 항목 제거로 트러블 최소화 |

---

## 📂 폴더 구조 및 코드 설명

```bash
studylog_final/
├── public/                    # 퍼블릭 폴더
├── src/
│   ├── components/
│   │   ├── Header.jsx        # 상단 네비게이션 - 로고 및 메뉴 영역
│   │   ├── SearchBar.jsx     # 검색창과 검색 버튼 기능 담당
│   │   └── Footer.jsx        # 하단 푸터 - © 2025 STUDYLOG 표시
│   ├── App.jsx               # 전체 페이지 레이아웃 및 태그 UI 구성
│   ├── main.jsx              # 루트 엘리먼트에 앱 렌더링 (ReactDOM)
│   └── index.css             # Tailwind CSS 포함한 전체 스타일 정의
├── tailwind.config.js        # Tailwind 설정 파일
├── postcss.config.js         # PostCSS 설정 파일
└── package.json              # 프로젝트 의존성 및 실행 설정

📄 파일별 상세 설명
✅ App.jsx

// 전체 앱 구조 담당
- Header, SearchBar, Footer 컴포넌트 조립
- 태그 리스트 배열로 구성하여 중앙에 렌더링
- 모든 레이아웃을 flex + gap 조합으로 구성
✅ main.jsx

// ReactDOM.createRoot()로 App 컴포넌트를 #root에 마운트
- Vite의 진입점
- BrowserRouter 사용 안함 (피드백 방지)
✅ index.css

/* Tailwind base 설정 */
@tailwind base;
@tailwind components;
@tailwind utilities;

✅ Header.jsx

- 현재는 클릭 기능 없는 고정형 헤더
- 로고 제거 → 불필요한 피드백 방지
- 추후 확장 시 <a href="/"> 또는 <Link> 삽입 가능
✅ SearchBar.jsx

- useState를 사용한 키워드 입력 상태 관리
- onSubmit 시 콘솔에 입력 값 출력 (실제 API 연결 대비용)
- 검색창 + 버튼 UI를 Tailwind로 구성
✅ Footer.jsx

- 아래쪽에 “© 2025 STUDYLOG”를 소형 폰트로 고정
- 배경 없이 텍스트만 표시해 미니멀하게 마무리
🖼️ 미리보기

🙋 기여자

이름	역할
박기영	프론트엔드 개발 / UI 레이아웃 정리 / 마크업 설계

🧾 비고
라우터 미사용: 페이지 전환 기능 없음 (feedback 방지용)

로고 제거: 비벡터 이미지로 인한 이슈 방지

기능 최소화: 검색 중심 구조만으로 트집 최소화

모든 구성은 Vite + Tailwind 기반으로 빠르고 가볍게 설계

감사합니다 🙏