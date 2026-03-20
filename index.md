# 🛠️ Weather Outfit — 개인 앱 설계

> 온도 숫자를 모르는 아이들을 위한 캐릭터 날씨 앱

**생성일**: 2026-03-19

---

## 내가 원하는 것

1. 현재 위치 기반 날씨 조회
2. 다른 장소 검색해서 날씨 조회
3. 캐릭터가 온도에 맞는 옷 착용 (이미지는 Gemini AI로 제작)
4. 날씨 따라 배경 변경
5. 직관적 텍스트 설명 ("Wear a jacket!")

---

## 🔍 레퍼런스에서 배운 것

1. **소품(우산, 선글라스, 마스크)이 옷만큼 강력한 날씨 신호** — 옷 교체 + 소품 추가로 정보 밀도 높이기
2. **배경 씬 변화가 캐릭터 옷 변화보다 임팩트 큼** — 배경 그라디언트/분위기가 날씨 무드 절반
3. **숫자 대신 문장** — "54°F" 대신 "Grab a jacket!" 이 아이에게 직결

참고 앱: 구름냥, WTHRD, iDress for Weather, Weather Fit, Cartoon Weather

## 🎨 화면 구성

**4가지 컨셉 와이어프레임** → [wireframes.html](./wireframes.html)

| 컨셉 | 핵심 | 추천 |
|-------|------|------|
| A: Fullscreen | 캐릭터 화면 70%, UI 최소 | ⭐ 1순위 |
| B: Card | 카드 + 시간대별 정보 | 정보 밀도 높음 |
| C: Scene | 캐릭터가 장면 안에 배치 | 감성적이나 이미지 비용↑ |
| D: Emotion | 캐릭터 표정 + 단색 배경 | A와 하이브리드 가능 |

## 💻 기술 선택

| 항목 | 선택 | 이유 |
|------|------|------|
| 날씨 API | Open-Meteo | API 키 불필요, 10K/day, CORS 허용 |
| 프론트엔드 | Vanilla JS (ES Modules) | 1-2 화면에 프레임워크 과잉 |
| 배포 | GitHub Pages | HTTPS 자동, 무료, 정적 |

총 파일: HTML 1 + CSS 1 + JS 3 + 이미지 6 = **11개**. 빌드 도구 불필요.

## ⚠️ 기술 리스크

- **Geolocation 권한 거부** (가장 큰 리스크) → 기본 도시 + 검색 우회
- Open-Meteo 다운타임 → localStorage 캐시
- 온도 구간 경계값 혼란 → config 분리로 쉽게 조정

---

## 다음 단계

1. [ ] 와이어프레임 컨셉 선택
2. [ ] Gemini로 캐릭터 이미지 제작 (6장: freezing/cold/cool/warm/hot/extreme)
3. [ ] 프로젝트 셋업 + 구현
4. [ ] GitHub Pages 배포

---

## 상세 리포트

- [🔍 벤치마크](./01-benchmark.md)
- [🎨 디자인](./02-design.md)
- [💻 아키텍처](./03-architecture.md)
- [📱 와이어프레임](./wireframes.html)
