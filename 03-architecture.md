## 💻 아키텍처

### 기술 스택 (비교표 + 추천)

#### 날씨 API 비교

| | Open-Meteo | OpenWeatherMap | WeatherAPI.com |
|---|---|---|---|
| **무료 한도** | 10,000 calls/day | 1,000 calls/day | 무료 티어 불안정 (과거 제거 이력) |
| **API 키** | 불필요 | 필요 (이메일 가입) | 필요 (이메일 가입) |
| **데이터** | 온도, 체감온도, 풍속, 강수, 날씨코드 | 온도, 체감온도, 풍속, 강수, 아이콘 | 온도, 체감온도, 풍속, 강수, 아이콘 |
| **지오코딩** | 내장 (도시명 검색 API 별도 제공) | 내장 | 내장 |
| **CORS** | 허용 | 허용 | 허용 |
| **라이선스** | 비상업 무료, 오픈소스 | 무료 + 상업 가능 (attribution) | 상업용 유료 |
| **안정성** | 오픈소스, 커뮤니티 운영 | 10년+ 운영, 안정 | 가격 정책 변동 이력 |

**추천: Open-Meteo**

이유:
- API 키 불필요 — 환경변수 관리, 키 노출 걱정 없음
- 10,000 calls/day — 개인 사용에 충분
- 지오코딩 API도 무료 제공 — 도시 검색 기능에 바로 사용
- CORS 허용 — 프론트엔드에서 직접 호출 가능, 백엔드 불필요
- 비상업 개인 프로젝트이므로 라이선스 조건 충족

#### 프론트엔드 비교

| | Vanilla HTML/CSS/JS | React (Vite) | Svelte (Vite) |
|---|---|---|---|
| **셋업 복잡도** | 없음 | npm init + 설정 | npm init + 설정 |
| **빌드 필요** | 없음 | 필요 | 필요 |
| **배포 난이도** | 정적 파일 그대로 | 빌드 후 정적 배포 | 빌드 후 정적 배포 |
| **상태 관리** | 직접 구현 | useState/useEffect | 반응형 내장 |
| **학습 곡선** | 없음 | 중간 | 낮음 |
| **컴포넌트 분리** | 수동 (ES modules) | 자연스러움 | 자연스러움 |

**추천: Vanilla HTML/CSS/JS (단일 파일 또는 소수 파일)**

이유:
- 화면 1-2개, 상태 단순 (현재 날씨 + 검색 결과) — 프레임워크가 해결할 문제가 없음
- Open-Meteo가 CORS 허용하므로 백엔드 없이 브라우저에서 직접 fetch
- 빌드 스텝 없이 GitHub Pages에 바로 배포
- 아이들이 쓰는 앱 — 번들 사이즈 작을수록 로딩 빠름

단, ES modules로 파일 분리하여 유지보수성 확보 (index.html + app.js + weather.js + config.js 정도).

#### 최종 스택

```
프론트엔드:  Vanilla JS (ES Modules)
날씨 API:   Open-Meteo (키 불필요, 무료)
지오코딩:   Open-Meteo Geocoding API
위치 정보:  브라우저 Geolocation API
배포:       GitHub Pages
```

---

### 데이터 모델

#### 온도 구간별 캐릭터 이미지 매핑

```javascript
// config.js
const OUTFIT_MAP = [
  { min: -Infinity, max: 0,   key: "freezing",  label: "Bundle up! It's freezing!",   image: "freezing.png" },
  { min: 0,         max: 10,  key: "cold",       label: "Wear a warm coat!",           image: "cold.png" },
  { min: 10,        max: 18,  key: "cool",       label: "Grab a jacket!",              image: "cool.png" },
  { min: 18,        max: 25,  key: "warm",       label: "Light clothes are fine!",     image: "warm.png" },
  { min: 25,        max: 32,  key: "hot",        label: "Stay cool! It's hot!",        image: "hot.png" },
  { min: 32,        max: Infinity, key: "extreme", label: "Stay inside if you can!",   image: "extreme.png" },
];
// 단위: 섭씨 (Open-Meteo 기본값)
// 사용자가 이미지를 Gemini로 제작 → assets/characters/ 에 배치
```

온도 구간은 6단계로 시작. 실사용 후 조정 가능하도록 config 분리.

#### 날씨 조건별 배경 매핑

```javascript
// config.js
const BACKGROUND_MAP = {
  clear:    { class: "bg-clear",    emoji: "☀️" },
  cloudy:   { class: "bg-cloudy",   emoji: "☁️" },
  rain:     { class: "bg-rain",     emoji: "🌧️" },
  snow:     { class: "bg-snow",     emoji: "❄️" },
  storm:    { class: "bg-storm",    emoji: "⛈️" },
  fog:      { class: "bg-fog",      emoji: "🌫️" },
};
// Open-Meteo의 WMO Weather Code → 위 카테고리로 변환하는 함수 필요
```

#### WMO Weather Code 변환

Open-Meteo는 [WMO Weather interpretation codes](https://open-meteo.com/en/docs)를 반환함:

```javascript
function weatherCodeToCondition(code) {
  if (code <= 1) return "clear";
  if (code <= 3) return "cloudy";
  if (code <= 48) return "fog";         // 45, 48: fog
  if (code <= 67) return "rain";        // 51-67: drizzle, rain
  if (code <= 77) return "snow";        // 71-77: snow
  if (code <= 99) return "storm";       // 80-99: showers, thunderstorm
  return "cloudy";                      // fallback
}
```

---

### 프로젝트 구조

```
weather-outfit/
├── index.html              # 메인 HTML (단일 페이지)
├── css/
│   └── style.css           # 스타일 + 배경 테마 + 반응형
├── js/
│   ├── app.js              # 메인 로직, DOM 바인딩
│   ├── weather.js           # Open-Meteo API 호출, 데이터 변환
│   └── config.js            # 온도 구간, 배경 매핑, 상수
├── assets/
│   └── characters/          # 사용자가 Gemini로 제작한 캐릭터 이미지
│       ├── freezing.png
│       ├── cold.png
│       ├── cool.png
│       ├── warm.png
│       ├── hot.png
│       └── extreme.png
└── README.md
```

총 파일 수: HTML 1 + CSS 1 + JS 3 + 이미지 6 = **11개**. 빌드 스텝 없음.

---

### 핵심 컴포넌트

| 컴포넌트 | 책임 | 위치 |
|---------|------|------|
| **LocationManager** | 브라우저 Geolocation으로 현재 위치 획득 + 도시 검색 (Open-Meteo Geocoding) | `app.js` |
| **WeatherService** | Open-Meteo API 호출, WMO 코드 변환, 온도/날씨 데이터 반환 | `weather.js` |
| **OutfitSelector** | 현재 온도 → OUTFIT_MAP에서 매칭 → 캐릭터 이미지 + 텍스트 반환 | `app.js` |
| **BackgroundManager** | 날씨 조건 → body 클래스 교체 → CSS가 배경 처리 | `app.js` |
| **SearchUI** | 검색 입력 → Geocoding API → 결과 목록 → 선택 시 날씨 조회 | `app.js` |

흐름:
```
[앱 로드]
  → Geolocation 요청
  → 위치 획득 (또는 기본값 사용)
  → WeatherService.fetch(lat, lon)
  → 온도 → OutfitSelector → 캐릭터 이미지 + 텍스트
  → 날씨코드 → BackgroundManager → 배경 변경
  → 화면 렌더링

[도시 검색]
  → 입력 → Geocoding API → 결과 리스트
  → 선택 → WeatherService.fetch(lat, lon)
  → (위와 동일)
```

---

### 기술 리스크

| # | 리스크 | 심각도 | 대응 |
|---|--------|--------|------|
| 1 | **Geolocation 권한 거부** — 아이가 "차단" 누르면 위치 못 가져옴 | 높음 | 기본 도시 설정 (예: Seattle) + 검색으로 우회. 권한 거부 시 친근한 안내 메시지 ("Tell me where you are!") |
| 2 | **Open-Meteo 다운타임** — 오픈소스 서비스라 SLA 없음 | 중간 | 마지막 성공 응답을 localStorage에 캐시. "Last checked: 30분 전" 표시. 개인 사용이므로 잠시 안 되면 나중에 다시 열면 됨 |
| 3 | **캐릭터 이미지 로딩 실패** — 네트워크 문제 또는 경로 오류 | 낮음 | `<img>` onerror로 이모지 fallback 표시 (예: 🧥). CSS로 이모지 크게 렌더링 |
| 4 | **HTTP vs HTTPS** — GitHub Pages는 HTTPS, Geolocation은 HTTPS에서만 동작 | 낮음 | GitHub Pages 기본이 HTTPS이므로 자동 해결. 로컬 개발 시 localhost도 허용됨 |
| 5 | **온도 구간 경계값** — 18도인데 "jacket" vs "light clothes" 경계에서 혼란 | 낮음 | 실사용 후 구간 조정. config.js에 분리되어 있으므로 숫자만 바꾸면 됨 |

---

### 배포

**GitHub Pages (추천)**

```bash
# 1. GitHub repo 생성
gh repo create weather-outfit --public

# 2. 코드 푸시
git init && git add -A && git commit -m "feat: initial weather outfit app"
git remote add origin <repo-url>
git push -u origin main

# 3. GitHub Pages 활성화
gh api repos/{owner}/weather-outfit/pages -X POST -f source.branch=main -f source.path=/

# 4. 완료 — https://{username}.github.io/weather-outfit/
```

왜 GitHub Pages인가:
- 빌드 스텝 없음 — 정적 파일 그대로 서빙
- HTTPS 자동 — Geolocation API 동작 보장
- 무료, 설정 1분
- 코드 푸시 = 자동 배포

Vercel/Netlify도 가능하지만, 빌드가 없는 정적 사이트에 CI/CD 파이프라인은 과잉.
