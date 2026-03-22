## 🧩 ASD 날씨 앱 리서치

> 날씨에 맞는 옷을 입히는 캐릭터 앱을 ASD(자폐 스펙트럼 장애) 아동 5세~10대 대상으로 특화 설계하기 위한 리서치

---

### 1. ASD UX 디자인 원칙

#### 1-1. 핵심 설계 원칙: 예측 가능성(Predictability)

ASD 아동은 변화와 불확실성에 높은 스트레스를 받는다. 인터페이스의 모든 요소가 "항상 같은 자리에, 항상 같은 방식으로" 작동해야 한다.

- **고정된 레이아웃**: 날씨 장면, 캐릭터, 보조 텍스트의 위치가 매일 동일해야 함
- **일관된 전환**: 화면 전환은 반드시 동일한 방식으로 (같은 속도, 같은 방향)
- **상태 명확화**: 앱이 무엇을 하고 있는지 항상 명확하게 표시 (로딩 중, 업데이트 중 등)

> "Individuals with ASD experience greater difficulty with changes in routine, so designers must incorporate transition techniques to ease autistic users into new activities." — DesignMantic

#### 1-2. 감각 과부하(Sensory Overload) 방지

ASD 아동의 약 85%가 색을 일반 아동보다 더 강하게 인식한다. 시각 자극에 매우 민감하다.

**피해야 할 것:**
- 번쩍이는 요소 (3회/초 초과 깜빡임 → 발작 위험 포함)
- 채도 높은 빨강·노랑 (불안 유발 가능)
- 동시에 움직이는 여러 요소
- 갑작스러운 소리 (특히 예고 없이 재생되는 오디오)
- 복잡한 배경 텍스처나 패턴

**권장:**
- 파스텔/중립 색조: 연파랑, 연녹색, 회색, 흰색
- 텍스트-배경 대비는 명확하게 (WCAG AA 이상)
- 음악은 가사 없는 잔잔한 배경음악만, 완전히 끌 수 있게

> "Almost 85% of children with ASD see colors with greater intensity... Neutral colors like grey, green, blue, and white were generally preferred." — Nature/Humanities and Social Sciences Communications (2025)

#### 1-3. 애니메이션 및 전환 가이드라인

ASD 아동은 애니메이션에 대해 **양극화된 반응**을 보인다. 일부는 시각적 움직임을 매우 즐기고, 일부는 압도당한다. 따라서 애니메이션은 반드시 **옵션**으로 제어 가능해야 한다.

| 상황 | 권장 접근 |
|------|-----------|
| 날씨 장면 전환 | 부드러운 페이드(0.3~0.5초), 갑작스러운 팝업 금지 |
| 캐릭터 움직임 | 느리고 예측 가능한 루프 애니메이션 |
| 비/눈 파티클 | 밀도 낮게, 반복적이고 안정적인 패턴 |
| 강조 효과 | 펄스(pulse)보다 색 변화 사용 |
| 로딩 상태 | 일정한 프로그레스 바 (스피너 지양) |

- `prefers-reduced-motion` 미디어 쿼리 지원 필수
- 부모 설정으로 "애니메이션 감소 모드" 별도 제공

> "Flashing lights, rapid transitions, or constant movement can be overwhelming for individuals with sensory sensitivities, so animations should be used sparingly and ensure they can be paused or turned off." — Accessibility.com

#### 1-4. 타이포그래피 및 텍스트

- ASD 아동은 시각적 학습자 → 텍스트보다 이미지/아이콘 우선
- 텍스트가 필요한 경우: 크고 굵게, 짧은 문장
- 어린 ASD 아동(5~9세): 텍스트 최소화, 그림 중심
- ASD 십대/청소년: 잘 구조화된 텍스트가 효과적
- 산세리프 폰트 권장 (Dyslexie, OpenDyslexic, 혹은 일반 굵은 산세리프)

---

### 2. ASD + 날씨 학습

#### 2-1. ASD 아동이 날씨 이해에서 겪는 어려움

**온도 감각 차이 (가장 핵심적인 문제)**
ASD 아동은 온도를 신경전형적 아동과 다르게 인식하는 경우가 많다. 추워도 춥다고 느끼지 못하거나, 더워도 덥다고 느끼지 못해 날씨에 맞지 않는 옷을 선택한다.

> "Children with autism might wear clothes that are not appropriate for the weather, like insisting on long sleeves in hot weather or shorts in cold weather." — Autism Speaks

**실행 기능(Executive Function) 어려움**
날씨를 보고 → 오늘 뭘 입을지 결정하는 과정은 여러 단계의 인과 추론이 필요하다. 이 시퀀스 처리가 ASD 아동에게는 어려울 수 있다.

**추상적 개념 이해 어려움**
"오늘 좀 쌀쌀해요" 같은 모호한 표현은 이해하기 어렵다. 온도 숫자(23°C)도 체감으로 연결하기 어렵다. **구체적이고 시각적인 표현**이 필요하다.

**계절 전환 저항**
옷의 계절 변화(여름 옷 → 가을 옷)는 루틴의 변화이므로 저항이 강하다. 시각적으로 미리 예측 가능하게 보여주는 것이 중요하다.

#### 2-2. 효과적인 교육 접근법

**시각 스케줄 (Visual Schedules)**
"오늘 날씨는 이렇고 → 이 옷을 입는다"는 인과 흐름을 시각적 순서로 제시. 이 앱의 핵심 컨셉과 직접적으로 일치한다.

**소셜 스토리 (Social Stories)**
Carol Gray가 개발한 접근법. "오늘 비가 와요. 비가 오면 우비를 입어요. 우비를 입으면 안 젖어요."처럼 짧은 내러티브로 상황→행동→결과를 연결. 연구 결과는 혼재되어 있지만, 단독 사용보다 다른 지원과 병행할 때 효과적.

**구체적 표현 (Concrete Representation)**
ABA 치료에서 사용하는 방법: 색깔 카드(초록=시원함, 빨강=더움)나 그림 온도계로 온도를 시각화. 숫자 대신 "아이가 코트를 입고 있다" 같은 장면으로 온도를 표현하는 이 앱의 접근이 ABA 원칙과 정확히 일치.

**반복과 일관성**
ASD 아동은 반복을 통해 학습한다. 매일 같은 형식으로 날씨를 제시하면, 시간이 지나면서 "이 장면 = 이 날씨 = 이 옷"의 연결이 자동화된다.

**시각적 프롬프트 위계 (Prompt Hierarchy)**
처음에는 캐릭터가 명확하게 옷을 입어 있고 (최대 지원), 학습이 쌓이면 아이가 직접 옷을 선택하는 인터랙션으로 발전시킬 수 있다.

> "Teaching simple clothing guidelines, like choosing weather-appropriate outfits, can be helpful." — Autism Speaks

#### 2-3. 학습 발판(Scaffolding) 설계

| 단계 | 표현 방식 | 대상 |
|------|-----------|------|
| 1단계: 직관 | 캐릭터가 이미 적절한 옷을 입고 있음 | 5~7세 |
| 2단계: 연결 | 날씨 아이콘 + 캐릭터 복장 + 짧은 레이블 | 7~9세 |
| 3단계: 예측 | 날씨 장면 보여주기 → 아이가 옷 선택 | 9~12세 |
| 4단계: 이유 | "왜 이 옷인가?" 짧은 설명 추가 | 10대 |

---

### 3. 기존 도구/앱 레퍼런스

#### 3-1. 시각 스케줄 앱 (직접 경쟁/참고)

**Choiceworks** (Bee Visual, v13.0 출시 2024)
- iOS 전용, 유료 (일회성 구매, 구독 없음)
- 스케줄 보드 + 감정 보드 + 대기 보드 + 감정 척도 4종
- 180개 이상 프리셋 이미지, 사용자 이미지/오디오 추가 가능
- 날씨 전용 기능은 없음
- 강점: 검증된 도구, 전문가 추천 多
- 약점: 스마트 디스플레이 미지원, 날씨와 연동 없음

> "The only one users have found that is anything close to the digital version of true routine/choiceboard system." — App Store 리뷰

**DayCape**
- 개인화 이미지, 타이머, 알림 지원 시각 계획 앱
- 날씨 연동 없음

**iCommunicate**
- 시각 스케줄, 커뮤니케이션 보드, 플래시카드 등 포함
- 유연한 커스터마이징

#### 3-2. 날씨 관련 교육 자료

**Autism Little Learners - Winter Dressing Visual Supports**
- 겨울 옷 입기 단계별 시각 카드 (무료 리소스)
- "코트 → 장갑 → 모자" 순서로 그림 카드 제공
- 이 앱의 "캐릭터 복장" 컨셉의 교육적 근거가 됨

**Teachers Pay Teachers - Autism Dress for Weather**
- 날씨+복장 매칭 교육 자료 다수
- 선생님과 ABA 치료사들이 만든 시각적 날씨-옷 대응표

**Morning Calendar and Weather Task Cards** (Autism Educators)
- 아침 루틴 중 날씨 확인을 포함한 라이프 스킬 카드
- "오늘 날씨는? → 어떤 옷을 입을까?" 플로우

#### 3-3. 스마트 디스플레이 관련

현재 Echo Show, Google Nest Hub를 **ASD 전용으로** 설계된 날씨 앱은 검색 결과에서 발견되지 않음. 이 공간이 명확한 **미충족 니즈(unmet need)** 임을 시사한다.

- Google Nest Hub의 날씨 화면은 시각적으로 바뀌지만 ASD 최적화 아님
- 스마트 디스플레이는 ASD 아동에게 적합한 폼팩터 (항상 보이는 앰비언트 디스플레이, 터치 입력 가능, 가정용)

#### 3-4. 기존 도구의 공통 약점

- 날씨 데이터와 의상 결정을 연결하는 도구가 없음
- 스마트 디스플레이 네이티브 앱이 없음
- 10대용 비유아적 디자인이 거의 없음
- 부모가 실시간으로 조정할 수 있는 유연성 부족

---

### 4. 연령대별 접근

#### 4-1. 연령대 분류

ASD 아동의 발달은 개인차가 크기 때문에, 달력 나이(chronological age)보다 **인지/발달 수준**에 맞추는 것이 더 중요하다. 단, 10대에게 유아적 디자인을 제공하는 "영아화(infantilization)" 는 반드시 피해야 한다.

> "Disabled teenagers and adults are just that: teens and adults. Infantilisation is treating people who are no longer children like children in a way that restricts their ability to be fully integrated with their age-peers." — Thinking Autism Guide

#### 4-2. 연령대별 디자인 접근

**5~7세 (유아기)**
- 크고 단순한 캐릭터, 밝지 않은 부드러운 색
- 텍스트 거의 없음, 그림 중심
- 단 하나의 명확한 정보만 (오늘 비 와요 = 우비 캐릭터)
- 인터랙션 없음 또는 매우 단순한 터치

**8~11세 (초등 중반)**
- 날씨 + 복장 + 짧은 레이블 조합
- 간단한 인터랙션 (옷 선택해보기)
- 날씨 변화 예측 ("오늘 오후에 비가 올 수도 있어요")
- 캐릭터 커스터마이징으로 몰입감 증가

**12~17세 (청소년)**
- "유아용"처럼 보이지 않는 디자인 → 미니멀하고 깔끔한 UI
- 캐릭터가 있더라도 애니메이션 캐릭터보다 **스타일리시한 일러스트** 사용
- 실질적 정보 추가 (강수 확률, 체감 온도 텍스트)
- 스스로 결정하는 인터랙션 ("오늘 뭘 입을지 선택해봐")
- "왜?" 설명 옵션 (이유를 알고 싶어하는 나이)

#### 4-3. 하나의 앱으로 전 연령대 커버하는 방법

| 방법 | 설명 |
|------|------|
| 레벨/모드 설정 | 부모가 "초급/중급/고급" 모드 설정 → 정보 복잡도가 달라짐 |
| 캐릭터 스킨 | 어린 아이 캐릭터 vs 10대 캐릭터 vs 성인 캐릭터 선택 |
| 정보 밀도 | 기본은 장면만 → 텍스트 레이어는 옵션 on/off |
| 색상 테마 | 아이용 부드러운 파스텔 vs 10대용 쿨 미니멀 테마 |

> 핵심 원칙: 코어 정보(날씨 장면 + 캐릭터 복장)는 모든 연령에 동일, **레이어를 쌓는 방식**으로 복잡도 조절

---

### 5. 보호자 고려사항

#### 5-1. 부모/보호자 설정 모드의 필요성

ASD 앱에서 보호자 설정은 선택이 아닌 필수다. 각 아동의 감각 프로필, 발달 수준, 선호 캐릭터가 모두 다르기 때문이다.

> "It is essential to consider the unique requirements of each child when customising autism apps, which may involve adjusting the settings to accommodate specific sensory sensitivities, language abilities, or learning preferences." — ABA therapy research

#### 5-2. 권장 설정 항목

**감각 설정**
- [ ] 애니메이션 감소 모드 (on/off)
- [ ] 배경음악 on/off
- [ ] 사운드 이펙트 on/off
- [ ] 화면 밝기 조절
- [ ] 고대비 모드

**콘텐츠 설정**
- [ ] 난이도/정보 레벨 (1~3단계)
- [ ] 캐릭터 선택 (유아/청소년/중립)
- [ ] 텍스트 표시 on/off
- [ ] 기온 단위 (°F / °C)
- [ ] 날씨 항목 선택 (비, 눈, 안개 등 필요한 것만)

**알림 및 루틴 연동**
- [ ] 아침 몇 시에 날씨 장면 자동 업데이트
- [ ] 날씨 변화 시 알림 (예: 오늘 비 예보)

#### 5-3. 설정 UI 설계 원칙

- 설정 화면은 아이들에게 노출되지 않도록 잠금 (PIN or 특정 제스처)
- 설정 항목은 전문용어 없이 (예: "감각 민감도 높음" ❌ → "화면이 조용하게 보이도록" ✅)
- 사전 프리셋 제공: "5세 감각 민감" / "10세 일반" / "청소년 심플" 등

#### 5-4. 치료사/교육자 연계

ABA 치료사나 특수교육 교사가 이 앱을 치료 도구로 활용할 가능성이 높다. 이를 고려한 기능:
- 현재 날씨 장면 캡처/프린트 가능 (세션 자료로 활용)
- 날씨-옷 연결 카드를 인쇄 가능한 PDF로 내보내기

---

### 핵심 인사이트 (5줄 요약)

1. **이 앱의 컨셉 자체가 ASD에 최적화되어 있다.** 숫자 대신 캐릭터 장면으로 날씨를 표현하는 방식은 ABA/시각 지원 원칙과 정확히 일치하며, 온도 감각이 다른 ASD 아동에게 특히 유용하다.

2. **감각 과부하 방지가 최우선이다.** 밝은 원색, 갑작스러운 전환, 여러 요소의 동시 움직임을 피하고, 파스텔/중립 색조 + 느리고 예측 가능한 애니메이션으로 설계해야 한다. 모든 애니메이션과 사운드는 끌 수 있어야 한다.

3. **스마트 디스플레이 + ASD 날씨 앱의 조합은 완전한 시장 공백이다.** 기존 ASD 앱들은 날씨 연동이 없고, 기존 날씨 앱들은 ASD를 고려하지 않는다. 이 앱이 이 공백을 채우는 첫 번째 도구가 될 수 있다.

4. **연령 범위 문제는 "레이어 모델"로 해결한다.** 핵심 경험(날씨 장면 + 캐릭터)은 모든 연령에 동일하게 유지하되, 텍스트/정보량/캐릭터 스타일을 부모가 설정하는 레이어로 조절한다. 10대에게 유아용 캐릭터를 강요하는 영아화는 반드시 피해야 한다.

5. **부모/보호자 설정 모드는 선택이 아닌 필수다.** 각 아동의 감각 프로필이 다르므로, 애니메이션·소리·색상·정보 복잡도를 개별 설정할 수 있어야 한다. ABA 치료사나 특수교육 교사가 치료 도구로 활용할 수 있는 내보내기 기능도 고려할 만하다.

---

### 참고 자료 (Sources)

- [Designing for Autistic People — Overview of Existing Research (UX Collective)](https://uxdesign.cc/designing-for-autistic-people-overview-of-existing-research-d6f6dc20710e)
- [Designing Inclusive and Sensory-Friendly UX for Neurodiverse Audiences (UX Magazine)](https://uxmag.com/articles/designing-inclusive-and-sensory-friendly-ux-for-neurodiverse-audiences)
- [Designing UI & UX for Children with Autism in Touch Devices (Otsimo / Medium)](https://medium.com/otsimo/designing-ui-ux-for-children-with-autism-in-touch-devices-bdd4c7741586)
- [Sensory-Friendly Design: Creating Digital Spaces that Support Autistic Users (Accessibility.com)](https://www.accessibility.com/blog/sensory-friendly-design-creating-digital-spaces-that-support-autistic-users)
- [Analysing the impact of sensory processing differences on color preferences in ASD (Nature, 2025)](https://www.nature.com/articles/s41599-025-05753-4)
- [Autism and Clothing Issues (Autism Speaks)](https://www.autismspeaks.org/expert-opinion/autism-and-clothing-issues)
- [Transitioning to Cooler Weather Clothing: Sensory-Friendly Strategies (BASS Autism)](https://www.bassautism.com/blog/transitioning-to-cooler-weather-clothing-sensory-friendly-strategies-for-kids-with-autism)
- [Teaching Daily Living Skills through Pictorial Self-Management (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC1297828/)
- [Using Visual Supports With Young Children With ASD (ResearchGate)](https://www.researchgate.net/publication/265033580_Using_Visual_Supports_With_Young_Children_With_Autism_Spectrum_Disorder)
- [Social Stories Scoping Review (PMC, 2024)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11263915/)
- [Winter Dressing Visual Supports for Autistic Preschoolers (Autism Little Learners)](https://autismlittlelearners.com/winter-dressing-visual-supports/)
- [Choiceworks App (BridgingApps)](https://bridgingapps.org/bridgingapps-bee-visual-app-giveaway-autism-acceptance-month/)
- [Children with Autism: A Visual Schedule App (Easter Seals Tech)](https://www.eastersealstech.com/2018/01/30/children-autism-visual-schedule-app/)
- [Parents: Please Stop Infantilising Teen and Adult Disabled Children (Thinking Autism Guide)](https://thinkingautismguide.com/2018/06/parents-do-not-infantilise-your-teenage.html)
- [Inclusive Animation Design for Neurodiverse Audiences (ProfileTree)](https://profiletree.com/inclusive-animation-design-creating-accessible-motion-graphics-for-neurodiverse-audiences/)
- [How to Design For Autistic People (Smart Interface Design Patterns)](https://smart-interface-design-patterns.com/articles/design-autism/)
- [Research on Improvement of Daily Living Skills in Virtual Campus Environments (Nature / Scientific Reports, 2025)](https://www.nature.com/articles/s41598-025-08224-7)
- [Autism and Temperature Regulation (Total Care ABA)](https://www.totalcareaba.com/autism/autism-and-temperature-regulation)
