# Gemini Image Prompts — Weather Outfit App (v4)

> **v4 변경사항**: 사람 캐릭터 추가 + 걷기→날씨 테마 2프레임 전환
> 각 날씨 상태마다 연결된 2가지 포즈 (before/after moment)
> 동물/사람 토글 — 같은 날씨에 동물 or 사람 캐릭터 선택 가능
> 새 COLD 상태 추가 (눈 없이 추운 날)

---

## 🎨 공통 스타일 가이드

기존 CSS Pixel Characters 레퍼런스 (짱구, 뽀로로, 시바견, 고양이):
- **Pixel art** style, chunky pixels, clean black outline
- Kawaii/cute proportions (big head, small body, big eyes)
- **직립 2족보행** — 모든 캐릭터가 두 발로 서서 걸어야 함
- Pink rosy cheeks, warm colors
- Transparent background, PNG
- Simple but expressive

> 모든 프롬프트 앞에 이 스타일 블록을 붙여서 일관성 유지:

```
Style: Cute pixel art character standing upright on two legs (bipedal),
chunky pixels with clean black outlines, kawaii proportions (big head,
small body, large expressive eyes), pink rosy cheeks, warm colors,
simple and readable at small sizes. Character must be clearly wearing
visible clothing. Transparent background, PNG.
Match the style of the reference pixel art characters exactly.
```

### 🚶 걷기 애니메이션 규칙 (2프레임)

모든 캐릭터에 동일 적용 — **손과 발의 방향만 교차**:
- **Frame 1**: 왼발 앞으로 내딛고, 오른손 앞으로 뻗음 / 오른발 뒤로, 왼손 뒤로
- **Frame 2**: 오른발 앞으로 내딛고, 왼손 앞으로 뻗음 / 왼발 뒤로, 오른손 뒤로

> 루프: Frame 1 ↔ Frame 2 (자연스러운 제자리걸음)
> 얼굴/옷/상체는 두 프레임 완전 동일! 손발 위치만 반대!
> **한 프롬프트에 2프레임 나란히 생성** — 좌: Frame 1, 우: Frame 2

---

## 👕 온도별 옷차림 시스템

| Tier | 온도 | 옷차림 | 캐릭터 | 배경 |
|------|------|--------|--------|------|
| 🔥 Hot | 25°C+ | 반팔 티셔츠 + 반바지 + 선글라스 | Shiba Inu | ☀️ Sunny |
| ☀️ Warm | 18-25°C | 얇은 긴팔 티셔츠 + 긴바지 | Shiba Inu | ☀️ Sunny |
| 🌤 Cool | 10-18°C | 후드 집업 + 긴바지 | Cat | ☁️ Cloudy |
| 🌧 Rainy | 비 올 때 | 레인코트 + 장화 + 우산 | Duck | 🌧 Rainy |
| 🧊 Cold | 0-10°C | 패딩 점퍼 + 목도리 + 비니 | Polar Bear | ❄️ Snowy |
| ❄️ Freezing | 0°C 이하 | 두꺼운 롱패딩 + 목도리 + 귀마개 + 장갑 | Polar Bear | ❄️ Snowy |
| 🌙 Night | 밤 | 잠옷 + 수면모자 | Owl | 🌙 Night |

> **핵심**: 옷이 크고 선명하게 보여야 함! 캐릭터 몸통의 60% 이상을 옷이 차지하도록.

---

## ☀️ Sunny — Shiba Inu

### 🔥 Hot (25°C+) — 반팔 + 반바지

```
Generate two pixel art frames of the same character side by side on
a single image, separated by clear space. Both frames show the exact
same cute pixel art shiba inu dog standing upright on two legs.

Character description (identical in both frames):
Orange and white fur shiba inu, wearing a bright RED short-sleeve t-shirt
and blue shorts. Tiny cool sunglasses on face. Pink cheeks, big happy
smile, curly tail up. The t-shirt and shorts must be large and clearly
visible — clothing is the most important element.
Chunky pixels, clean black outlines, kawaii proportions.

LEFT frame (Frame 1):
The shiba is walking. The LEFT foot is stepping forward and the RIGHT
foot is stepping back. The RIGHT arm swings forward and the LEFT arm
swings back.

RIGHT frame (Frame 2):
The shiba is walking. The RIGHT foot is stepping forward and the LEFT
foot is stepping back. The LEFT arm swings forward and the RIGHT arm
swings back.

Only the arms and legs change between the two frames. Face, clothing,
body, and all other details stay exactly the same.
Transparent background, PNG, 1024x512 (two 512x512 frames side by side).
```

---

### ☀️ Warm (18-25°C) — 얇은 긴팔

```
Generate two pixel art frames of the same character side by side on
a single image, separated by clear space. Both frames show the exact
same cute pixel art shiba inu dog standing upright on two legs.

Character description (identical in both frames):
Orange and white fur shiba inu, wearing a light BLUE long-sleeve t-shirt
and khaki long pants. No sunglasses. Happy face with big eyes, pink
cheeks, curly tail up. The long-sleeve shirt and pants must be large
and clearly visible — clothing is the most important element.
Chunky pixels, clean black outlines, kawaii proportions.

LEFT frame (Frame 1):
The shiba is walking. The LEFT foot is stepping forward and the RIGHT
foot is stepping back. The RIGHT arm swings forward and the LEFT arm
swings back.

RIGHT frame (Frame 2):
The shiba is walking. The RIGHT foot is stepping forward and the LEFT
foot is stepping back. The LEFT arm swings forward and the RIGHT arm
swings back.

Only the arms and legs change between the two frames. Face, clothing,
body, and all other details stay exactly the same.
Transparent background, PNG, 1024x512 (two 512x512 frames side by side).
```

---

## 🌧 Rainy — Duck with Raincoat

```
Generate two pixel art frames of the same character side by side on
a single image, separated by clear space. Both frames show the exact
same cute pixel art duck standing upright on two legs.

Character description (identical in both frames):
Bright yellow duck with orange beak, wearing a bright YELLOW raincoat
(buttoned up, covering the entire torso) and red rain boots on both feet.
Holding a small red umbrella in the RIGHT wing. Pink rosy cheeks, big
round eyes. The raincoat must be the most prominent feature — large and
clearly a raincoat. Rain boots clearly visible.
Chunky pixels, clean black outlines, kawaii proportions.

LEFT frame (Frame 1):
The duck is walking. The LEFT foot is stepping forward and the RIGHT
foot is stepping back. The LEFT wing swings back freely (the RIGHT wing
holds the umbrella and stays in place).

RIGHT frame (Frame 2):
The duck is walking. The RIGHT foot is stepping forward and the LEFT
foot is stepping back. The LEFT wing swings forward freely (the RIGHT
wing holds the umbrella and stays in place).

Only the legs and the free left wing change between the two frames.
Face, clothing, umbrella, body, and all other details stay exactly
the same.
Transparent background, PNG, 1024x512 (two 512x512 frames side by side).
```

---

## ☁️ Cool — Cat in Hoodie

### 🌤 Cool (10-18°C) — 후드 집업

```
Generate two pixel art frames of the same character side by side on
a single image, separated by clear space. Both frames show the exact
same cute pixel art cat standing upright on two legs.

Character description (identical in both frames):
Grey and white cat with subtle stripes, wearing a cozy GREY zip-up
hoodie (hood down, zipper line visible down the front) and dark blue
jeans. Pink rosy cheeks, big round eyes, small pink nose.
The hoodie must be large, clearly visible, and the most prominent
feature on the character.
Chunky pixels, clean black outlines, kawaii proportions.

LEFT frame (Frame 1):
The cat is walking. The LEFT foot is stepping forward and the RIGHT
foot is stepping back. The RIGHT arm swings forward and the LEFT arm
swings back.

RIGHT frame (Frame 2):
The cat is walking. The RIGHT foot is stepping forward and the LEFT
foot is stepping back. The LEFT arm swings forward and the RIGHT arm
swings back.

Only the arms and legs change between the two frames. Face, clothing,
body, and all other details stay exactly the same.
Transparent background, PNG, 1024x512 (two 512x512 frames side by side).
```

---

## ❄️ Snowy — Polar Bear in Winter Gear

### 🧊 Cold (0-10°C) — 패딩 점퍼 + 목도리 + 비니

```
Generate two pixel art frames of the same character side by side on
a single image, separated by clear space. Both frames show the exact
same cute pixel art polar bear standing upright on two legs.

Character description (identical in both frames):
White/light blue fur polar bear, wearing a puffy RED padded jacket
(puffer jacket, clearly quilted and puffy), a chunky yellow knit scarf
wrapped around the neck, and a blue knit beanie hat on the head.
Dark pants and small boots on feet. Pink rosy cheeks, big round dark
eyes, small warm smile. The puffer jacket must be the BIGGEST and most
prominent feature — clearly a warm winter coat. Scarf and beanie also
clearly visible.
Chunky pixels, clean black outlines, kawaii proportions.

LEFT frame (Frame 1):
The polar bear is walking. The LEFT foot is stepping forward and the
RIGHT foot is stepping back. The RIGHT arm swings forward and the LEFT
arm swings back.

RIGHT frame (Frame 2):
The polar bear is walking. The RIGHT foot is stepping forward and the
LEFT foot is stepping back. The LEFT arm swings forward and the RIGHT
arm swings back.

Only the arms and legs change between the two frames. Face, clothing,
body, and all other details stay exactly the same.
Transparent background, PNG, 1024x512 (two 512x512 frames side by side).
```

---

### ❄️ Freezing (0°C 이하) — 롱패딩 + 목도리 + 귀마개 + 장갑

```
Generate two pixel art frames of the same character side by side on
a single image, separated by clear space. Both frames show the exact
same cute pixel art polar bear standing upright on two legs.

Character description (identical in both frames):
White/light blue fur polar bear, wearing a LONG puffy dark navy padded
coat that reaches below the knees (very puffy and thick), a chunky red
knit scarf, red earmuffs on both ears, and red mittens on both paws.
Thick winter boots on feet. Pink extra-rosy cheeks, big round dark eyes.
The long puffer coat must be HUGE and cover most of the body — this is
the key visual showing "it is VERY cold, bundle up completely."
Earmuffs, mittens, scarf all clearly visible.
Chunky pixels, clean black outlines, kawaii proportions.

LEFT frame (Frame 1):
The polar bear is walking. The LEFT foot is stepping forward and the
RIGHT foot is stepping back. The RIGHT arm (with red mitten) swings
forward and the LEFT arm (with red mitten) swings back.

RIGHT frame (Frame 2):
The polar bear is walking. The RIGHT foot is stepping forward and the
LEFT foot is stepping back. The LEFT arm (with red mitten) swings
forward and the RIGHT arm (with red mitten) swings back.

Only the arms and legs change between the two frames. Face, clothing,
body, and all other details stay exactly the same.
Transparent background, PNG, 1024x512 (two 512x512 frames side by side).
```

---

## 🌙 Night — Owl in Pajamas

```
Generate two pixel art frames of the same character side by side on
a single image, separated by clear space. Both frames show the exact
same cute pixel art owl standing upright on two legs (not perched
on a branch).

Character description (identical in both frames):
Brown and cream feathered owl, wearing cute star-patterned PAJAMAS
(light blue pajama top and matching pajama pants with small yellow
stars printed on them) and a blue nightcap (sleep hat) with a small
star on the tip. Big round yellow eyes, pink rosy cheeks, small curved
beak. Holding a small pixel teddy bear in the RIGHT wing.
The pajamas must be clearly visible and the most prominent feature.
Chunky pixels, clean black outlines, kawaii proportions.

LEFT frame (Frame 1):
The owl is walking. The LEFT foot is stepping forward and the RIGHT
foot is stepping back. The LEFT wing swings back freely (the RIGHT
wing holds the teddy bear and stays in place).

RIGHT frame (Frame 2):
The owl is walking. The RIGHT foot is stepping forward and the LEFT
foot is stepping back. The LEFT wing swings forward freely (the RIGHT
wing holds the teddy bear and stays in place).

Only the legs and the free left wing change between the two frames.
Face, clothing, teddy bear, body, and all other details stay exactly
the same.
Transparent background, PNG, 1024x512 (two 512x512 frames side by side).
```

---

## 🖼️ Backgrounds (캐릭터 없는 배경)

> 배경은 변경 없음

### ☀️ Sunny Background

```
Pixel art sunny day landscape scene, 16:9 ratio (1024x600).
Bright blue pixel sky with a few small fluffy white pixel clouds.
A large cheerful pixel sun in the upper right with subtle rays.
Lush green pixel hills rolling in the foreground with small colorful
pixel flowers (red, yellow, white). A small dirt path winding through.
One or two pixel butterflies in the air.
Chunky pixel art style matching the reference shiba inu game aesthetic.
Warm, bright, cheerful palette — sky blue, grass green, golden sunlight.
No characters. No text. 1024x600 pixels.
```

### 🌧 Rainy Background

```
Pixel art rainy afternoon landscape scene, 16:9 ratio (1024x600).
Grey-blue pixel overcast sky with dark grey pixel clouds.
Soft green-grey pixel hills. A few pixel trees with rounded tops on
the edges. Small pixel puddles on the ground reflecting the grey sky.
Pixel rain streaks falling (thin blue-white pixel lines).
A few small pixel flowers bending in the rain.
Chunky pixel art style matching the reference shiba inu game aesthetic.
Muted, cozy palette — grey-blue sky, soft green ground, blue puddles.
Not gloomy, still cozy. No characters. No text. 1024x600 pixels.
```

### ❄️ Snowy Background

```
Pixel art snowy winter landscape scene, 16:9 ratio (1024x600).
Pale blue-grey pixel sky. White pixel snow covering rounded hills.
A few snow-covered pixel pine trees with chunky shapes.
Pixel snowflakes falling gently (small white dots).
A small pixel snowman in the distance. Frozen pixel pond or
snow-covered path in the middle. Soft pixel shadows in pale blue.
Chunky pixel art style matching the reference shiba inu game aesthetic.
Cool, peaceful palette — soft whites, pale blues, gentle lavender.
No characters. No text. 1024x600 pixels.
```

### 🌙 Night Background

```
Pixel art peaceful night landscape scene, 16:9 ratio (1024x600).
Deep dark navy blue pixel sky with a bright pixel crescent moon
and scattered pixel stars (different sizes, some twinkling).
Dark silhouettes of rounded pixel hills and trees in foreground.
A tiny warm golden pixel glow from a distant house window.
Small pixel fireflies (yellow-green dots) near the ground.
Chunky pixel art style matching the reference shiba inu game aesthetic.
Calm palette — deep indigo sky, dark green-navy ground, golden accents.
Dreamy and peaceful, not scary. No characters. No text. 1024x600 pixels.
```

### ☁️ Cloudy Background

```
Pixel art cloudy overcast day landscape scene, 16:9 ratio (1024x600).
Thick soft grey-white pixel clouds covering the whole sky.
Muted light, no visible sun. Gentle grey-green pixel hills.
Pixel trees with rounded shapes in slightly muted colors.
A small pixel bench or cozy gazebo in the middle distance.
Maybe a few fallen pixel leaves drifting.
Chunky pixel art style matching the reference shiba inu game aesthetic.
Muted, cozy palette — soft greys, gentle sage green, lavender undertones.
Peaceful and contemplative. No characters. No text. 1024x600 pixels.
```

---

## 📐 에셋 스펙 요약

### 캐릭터 (투명 배경 PNG)

| 온도 Tier | Character | 생성 이미지 | 옷차림 (핵심!) |
|-----------|-----------|------------|----------------|
| 🔥 Hot (25°C+) | Shiba Inu | 1장 (2프레임 나란히) | 빨간 반팔 티 + 파란 반바지 + 선글라스 |
| ☀️ Warm (18-25°C) | Shiba Inu | 1장 (2프레임 나란히) | 하늘색 긴팔 티 + 카키 긴바지 |
| 🌧 Rainy | Duck | 1장 (2프레임 나란히) | 노란 레인코트 + 빨간 장화 + 빨간 우산 |
| 🌤 Cool (10-18°C) | Cat | 1장 (2프레임 나란히) | 회색 후드 집업 + 진청바지 |
| 🧊 Cold (0-10°C) | Polar Bear | 1장 (2프레임 나란히) | 빨간 패딩 점퍼 + 노란 목도리 + 파란 비니 |
| ❄️ Freezing (<0°C) | Polar Bear | 1장 (2프레임 나란히) | 남색 롱패딩 + 빨간 목도리 + 귀마개 + 장갑 |
| 🌙 Night | Owl | 1장 (2프레임 나란히) | 별무늬 파란 잠옷 + 수면모자 |

**총 캐릭터 생성: 7장** (각 1024×512, 나중에 반으로 잘라서 2프레임)
**잘라낸 프레임: 14장** (7 outfits × 2 frames)

### 배경 (1024×600 PNG)

| Weather | 핵심 요소 |
|---------|-----------|
| ☀️ Sunny | 파란 하늘, 초록 언덕, 꽃, 나비 |
| 🌧 Rainy | 회색 하늘, 웅덩이, 비 |
| ❄️ Snowy | 눈 덮인 언덕, 소나무, 눈사람 |
| 🌙 Night | 남색 하늘, 달, 별, 반딧불이 |
| ☁️ Cloudy | 흐린 하늘, 벤치 |

**총 배경 이미지: 5장**

### 전체 Gemini 요청: 12회 (캐릭터 7 + 배경 5)

---

## 🎬 애니메이션 구현

2프레임 걷기 루프 — CSS `steps()` 활용:

```css
.character {
  animation: walk-loop 0.6s steps(1) infinite;
}

/* 2프레임 루프: Frame1 ↔ Frame2 교차 */
@keyframes walk-loop {
  0%   { background-image: url('shiba-hot-1.png'); }  /* 왼발 앞, 오른손 앞 */
  50%  { background-image: url('shiba-hot-2.png'); }  /* 오른발 앞, 왼손 앞 */
}
```

Calm 모드: `animation-duration: 1.2s` (2배 느리게)
Still 모드: `animation: none` (Frame 1 고정)

---

## 🗂️ 앱 로직: 온도 → 캐릭터 + 배경 매핑

```javascript
function getOutfit(tempC, weatherCode, isNight) {
  // 밤이면 무조건 올빼미 잠옷
  if (isNight) return { character: 'owl-night', bg: 'night' };

  // 비 오면 무조건 오리 레인코트
  if (isRainy(weatherCode)) return { character: 'duck-rainy', bg: 'rainy' };

  // 온도별 옷차림
  if (tempC >= 25) return { character: 'shiba-hot', bg: 'sunny' };
  if (tempC >= 18) return { character: 'shiba-warm', bg: 'sunny' };
  if (tempC >= 10) return { character: 'cat-cool', bg: 'cloudy' };
  if (tempC >= 0)  return { character: 'bear-cold', bg: 'snowy' };
  return { character: 'bear-freezing', bg: 'snowy' };
}
```

---

## 💡 Gemini 사용 팁

1. **레퍼런스 이미지 첨부**: CSS Pixel Characters 스크린샷을 업로드하고 "match this exact pixel art style, bipedal characters" 지시
2. **2프레임 나란히 한번에**: 한 프롬프트로 두 프레임을 좌우 나란히 생성 → 나중에 반으로 잘라서 사용
3. **옷 강조**: "The clothing must be the LARGEST, most prominent visual element on the character" 반복
4. **같은 캐릭터 다른 옷**: Shiba Hot → Shiba Warm 순서로 같은 세션에서 요청 (캐릭터 일관성 유지)
5. **크기**: 1024×512로 생성 → 반으로 잘라서 512×512 두 장 → 앱에서 리사이즈
6. **배경도 같은 세션에서**: 캐릭터 생성 직후 배경 생성하면 색감 매칭↑

### 파일 네이밍 규칙

```
assets/characters/
  shiba-hot-1.png      shiba-hot-2.png
  shiba-warm-1.png     shiba-warm-2.png
  duck-rainy-1.png     duck-rainy-2.png
  cat-cool-1.png       cat-cool-2.png
  bear-cold-1.png      bear-cold-2.png
  bear-freezing-1.png  bear-freezing-2.png
  owl-night-1.png      owl-night-2.png

assets/backgrounds/
  bg-sunny.png
  bg-rainy.png
  bg-snowy.png
  bg-night.png
  bg-cloudy.png
```

### Gemini 워크플로우 (추천 순서)

```
Session 1: Shiba Inu (reference image 첨부)
  → shiba-hot (1장 = 2프레임 나란히)
  → shiba-warm (1장 = 2프레임 나란히)
  → bg-sunny

Session 2: Duck + Cat
  → duck-rainy (1장 = 2프레임 나란히)
  → cat-cool (1장 = 2프레임 나란히)
  → bg-rainy
  → bg-cloudy

Session 3: Polar Bear + Owl
  → bear-cold (1장 = 2프레임 나란히)
  → bear-freezing (1장 = 2프레임 나란히)
  → owl-night (1장 = 2프레임 나란히)
  → bg-snowy
  → bg-night
```

### 이미지 자르기 (생성 후)

```bash
# 1024x512 이미지를 반으로 잘라서 2프레임 분리
# ImageMagick 사용
convert shiba-hot-sheet.png -crop 512x512+0+0 shiba-hot-1.png
convert shiba-hot-sheet.png -crop 512x512+512+0 shiba-hot-2.png
```

---
---

# v4 — 사람 캐릭터 + 날씨 테마 애니메이션 + COLD 상태

## v4 변경 요약

- **걷기 → 날씨 테마 2프레임**: 단순 걷기 대신 각 날씨와 연결된 포즈 2장
- **사람 캐릭터 5종 추가**: 동물과 같은 옷차림, 사람 캐릭터
- **새 동물 캐릭터**: cat-cold (눈 없이 추운 날 — 코트+비니)
- **bear-cold → bear-snowy 리네임**: 눈 오는 날 전용

## v4 스타일 가이드 (기존 캐릭터와 동일하게)

기존 이미지 레퍼런스:
- Chunky pixel art, approx 128×128 upscaled
- Chibi/kawaii 비율 — 큰 머리, 짧은 몸통
- **검정 배경 (#000000)**
- 핑크 볼터치 양쪽
- 단순한 점 눈 + 하이라이트
- 밝고 채도 높은 옷 색상
- 전신 (머리~발), 가운데 정렬
- 텍스트/UI 요소 없음

## v4 2프레임 애니메이션 컨셉 (Subtle 움직임)

> **핵심 원칙**: 기본 포즈는 99% 동일. 작은 요소 1-2개만 변화.
> 루프 시 자연스러운 "살아있는" 느낌을 주되, 뚝뚝 끊기지 않도록.

| 상태 | Frame 1 (기본 포즈) | Frame 2 (미세 변화) |
|------|---------------------|---------------------|
| HOT | 선글라스 머리 위, 한 손 이마 가림 | 같은 포즈 + 손만 살짝 옆으로 이동 (부채질 느낌) |
| COOL | 양손 주머니, 정면 | 같은 포즈 + 머리카락 끝만 오른쪽으로 살짝 날림 |
| COLD | 팔짱 끼고 움츠림 | 같은 포즈 + 작은 입김 구름 추가 |
| SNOWY | 올려다보기, 양손 내리고 | 같은 포즈 + 장갑 손 살짝만 올림 + 눈송이 1개 |
| RAINY | 우산 들고 서있기, 미소 | 같은 포즈 + 발밑 작은 물방울 2-3개 추가 |

---

## 🐱 NEW: Cat — COLD (눈 없이 추운 날)

> 새 동물 캐릭터. 기존 bear-cold(패딩+목도리+귀마개)보다 가벼운 겨울 차림.

### cat-cold-1.png (Frame 1: 기본)

```
Pixel art character on solid black background.
A cute chibi orange tabby cat standing upright on two legs, anthropomorphic.
Wearing a forest GREEN winter coat with visible buttons down the front,
and a bright YELLOW knitted beanie hat pulled down to the ears.
Dark navy pants and small brown boots.
The cat has cream-colored belly fur visible at the collar.
Arms crossed, hugging itself, looking a bit chilly with a slight frown.
Pink blush circles on both cheeks, simple black dot eyes with small white highlights.
Chunky pixel art style, bright saturated colors, clean but soft edges.
Full body from head to toe, centered in frame.
No text, no ground, no shadow. Only the character on pure black background.
```

### cat-cold-2.png (Frame 2: 입김만 추가)

```
Pixel art character on solid black background.
The EXACT SAME cute chibi orange tabby cat — same green winter coat, same yellow
beanie, same dark pants, same brown boots, same cream belly, same arms crossed
hugging itself, same pose and position.
The ONLY difference: a small white breath cloud (3-4 white pixels) now visible
near the mouth, and eyes slightly more squinted.
Everything else — body, arms, legs, clothing — is pixel-for-pixel identical to Frame 1.
Pink blush circles on both cheeks.
Same chunky pixel art style, same proportions, same colors as Frame 1.
Full body from head to toe, centered in frame.
No text, no ground, no shadow. Only the character on pure black background.
```

---

## 🧑 사람 캐릭터 — 5종

> 모든 사람 캐릭터는 **같은 캐릭터** — 짧은 갈색 머리, 둥근 얼굴.
> 동물 캐릭터와 **같은 옷 색상 매칭** — 한눈에 같은 날씨 상태임을 알 수 있도록.

### kid-hot-1.png (HOT Frame 1: 기본)

```
Pixel art character on solid black background.
A cute chibi pixel art young character (short brown hair,
round face) standing upright. Wearing a bright RED short-sleeve t-shirt,
BLUE shorts, and black SUNGLASSES pushed up on the forehead.
One hand raised up near forehead shielding eyes from sun, cheerful smile.
Other hand relaxed at side.
Pink blush circles on both cheeks, simple black dot eyes with white highlights.
Chunky pixel art style matching the reference shiba inu character — same pixel
density, same proportions (big head, small body), same level of detail.
Full body from head to toe, centered in frame.
No text, no ground, no shadow. Only the character on pure black background.
```

### kid-hot-2.png (HOT Frame 2: 미세 변화)

```
Pixel art character on solid black background.
The EXACT SAME cute chibi character — same red t-shirt, blue shorts,
same short brown hair, same sunglasses on forehead, same pose.
The ONLY differences from Frame 1:
- The raised hand has shifted slightly to the side (subtle fanning motion)
- Mouth slightly more open
Everything else — body, legs, clothing position — is pixel-for-pixel identical.
Pink blush circles on both cheeks.
Same chunky pixel art style, same proportions, same colors as Frame 1.
Full body from head to toe, centered in frame.
No text, no ground, no shadow. Only the character on pure black background.
```

---

### kid-cool-1.png (COOL Frame 1: 기본)

```
Pixel art character on solid black background.
A cute chibi pixel art young character (same character — short brown hair, round face) standing
upright. Wearing a BLUE zip-up hoodie jacket and KHAKI long pants, white sneakers.
Both hands casually tucked into hoodie front pockets. Relaxed gentle smile.
Hair resting naturally.
Pink blush circles on both cheeks, simple black dot eyes with white highlights.
Chunky pixel art style matching the reference characters.
Full body from head to toe, centered in frame.
No text, no ground, no shadow. Only the character on pure black background.
```

### kid-cool-2.png (COOL Frame 2: 미세 변화)

```
Pixel art character on solid black background.
The EXACT SAME cute chibi character — same blue hoodie, khaki pants, white sneakers,
same hands in pockets, same body position and pose.
The ONLY difference from Frame 1:
- The tips of the hair are shifted slightly to the right (gentle breeze)
- Hoodie drawstrings shifted slightly right
Everything else — body, arms, legs, face, clothing — is pixel-for-pixel identical.
Pink blush circles on both cheeks.
Same chunky pixel art style, same proportions, same colors as Frame 1.
Full body from head to toe, centered in frame.
No text, no ground, no shadow. Only the character on pure black background.
```

---

### kid-cold-1.png (COLD Frame 1: 기본)

```
Pixel art character on solid black background.
A cute chibi pixel art young character (same character — short brown hair peeking out from hat)
standing upright. Wearing a forest GREEN winter coat with visible buttons,
a bright YELLOW knitted beanie hat, dark NAVY jeans, and brown boots.
Arms crossed hugging the body, slight shiver expression.
Pink blush circles on both cheeks, simple black dot eyes.
Chunky pixel art style matching the reference characters.
Full body from head to toe, centered in frame.
No text, no ground, no shadow. Only the character on pure black background.
```

### kid-cold-2.png (COLD Frame 2: 미세 변화)

```
Pixel art character on solid black background.
The EXACT SAME cute chibi character — same green winter coat, yellow beanie, navy jeans,
brown boots, same arms crossed hugging body, same pose and position.
The ONLY differences from Frame 1:
- A small white breath cloud (3-4 white pixels) appears near the mouth
- Eyes slightly more squinted
Everything else — body, arms, legs, clothing — is pixel-for-pixel identical.
Pink blush circles on both cheeks.
Same chunky pixel art style, same proportions, same colors as Frame 1.
Full body from head to toe, centered in frame.
No text, no ground, no shadow. Only the character on pure black background.
```

---

### kid-snowy-1.png (SNOWY Frame 1: 기본)

```
Pixel art character on solid black background.
A cute chibi pixel art young character (same character — short brown hair peeking from earmuffs)
standing upright. Wearing a puffy dark NAVY blue puffer jacket (quilted, very puffy),
a RED scarf wrapped around neck, RED earmuffs on ears, RED mittens on both hands,
and brown winter BOOTS.
Looking up at the sky with wonder — head tilted slightly up, mouth in an "ooh"
shape. Both mittened hands down at sides.
Pink blush circles on both cheeks, eyes looking upward with sparkle highlights.
Chunky pixel art style matching the reference polar bear character.
Full body from head to toe, centered in frame.
No text, no ground, no shadow. Only the character on pure black background.
```

### kid-snowy-2.png (SNOWY Frame 2: 미세 변화)

```
Pixel art character on solid black background.
The EXACT SAME cute chibi character — same navy puffer jacket, red scarf, red earmuffs,
red mittens, brown boots, same head tilted up looking at sky, same pose.
The ONLY differences from Frame 1:
- One mittened hand raised slightly (just a few pixels higher than Frame 1)
- A single small white snowflake pixel near the raised hand
Everything else — body, other arm, legs, face direction — is pixel-for-pixel identical.
Pink blush circles on both cheeks.
Same chunky pixel art style, same proportions, same colors as Frame 1.
Full body from head to toe, centered in frame.
No text, no ground, no shadow. Only the character on pure black background.
```

---

### kid-rainy-1.png (RAINY Frame 1: 기본)

```
Pixel art character on solid black background.
A cute chibi pixel art young character (same character — short brown hair) standing upright.
Wearing a bright YELLOW raincoat buttoned up (covering torso, buttons visible),
and RED rain boots on both feet.
Holding a small RED umbrella open above the head with the right hand.
Left hand hanging at the side. Calm expression, gentle smile looking forward.
Pink blush circles on both cheeks, simple black dot eyes.
Chunky pixel art style matching the reference duck character.
Full body from head to toe, centered in frame.
No text, no ground, no shadow. Only the character on pure black background.
```

### kid-rainy-2.png (RAINY Frame 2: 미세 변화)

```
Pixel art character on solid black background.
The EXACT SAME cute chibi character — same yellow raincoat, red rain boots, red umbrella
held in right hand above head, same standing pose, same left hand at side.
The ONLY differences from Frame 1:
- 2-3 small blue water drop pixels appear near the feet (tiny puddle splash)
- Smile slightly wider
Everything else — body, arms, legs, umbrella position — is pixel-for-pixel identical.
Pink blush circles on both cheeks.
Same chunky pixel art style, same proportions, same colors as Frame 1.
Full body from head to toe, centered in frame.
No text, no ground, no shadow. Only the character on pure black background.
```

---

## v4 파일 네이밍 요약

### 새로 생성 필요한 이미지 (12장)

```
assets/characters/
  cat-cold-1.png       cat-cold-2.png        ← NEW 동물 (COLD)
  kid-hot-1.png        kid-hot-2.png         ← NEW 사람
  kid-cool-1.png       kid-cool-2.png        ← NEW 사람
  kid-cold-1.png       kid-cold-2.png        ← NEW 사람
  kid-snowy-1.png      kid-snowy-2.png       ← NEW 사람
  kid-rainy-1.png      kid-rainy-2.png       ← NEW 사람
```

### 기존 유지 (코드에서 리네임)

```
  bear-cold-1.png  → 코드에서 bear-snowy 상태로 사용 (파일명 유지)
  shiba-hot-1/2, shiba-cool-1/2, duck-rainy-1/2 → 그대로 유지
```

### 옷 색상 매칭 (동물 ↔ 사람)

| 상태 | 공통 색상 | 동물 | 사람 |
|------|----------|------|------|
| HOT | 빨간 상의 + 파란 하의 + 선글라스 | Shiba | Kid |
| COOL | 파란 후드/자켓 + 카키 바지 | Shiba | Kid |
| COLD | 초록 코트 + 노란 비니 | Cat | Kid |
| SNOWY | 남색 패딩 + 빨간 목도리/귀마개/장갑 | Bear | Kid |
| RAINY | 노란 레인코트 + 빨간 장화/우산 | Duck | Kid |

## Gemini 워크플로우 (v4)

```
Session 1: 기존 캐릭터 스타일 레퍼런스 이미지 첨부
  → cat-cold-1.png (개별 생성)
  → cat-cold-2.png (개별 생성)

Session 2: Kid 캐릭터 (Session 1 결과를 레퍼런스로 첨부)
  → kid-hot-1.png, kid-hot-2.png
  → kid-cool-1.png, kid-cool-2.png
  → kid-cold-1.png, kid-cold-2.png

Session 3: Kid 캐릭터 계속
  → kid-snowy-1.png, kid-snowy-2.png
  → kid-rainy-1.png, kid-rainy-2.png
```

> 각 프레임 **개별 생성** 권장 (v3의 나란히 생성보다 일관성 높음)
> 레퍼런스 이미지를 항상 첨부하여 스타일 일관성 유지

---

## 🌇 NEW: 저녁 배경 (bg-evening.png)

> 기존 bg-sunny.png와 같은 구도, 색감만 석양 톤으로.
> 해가 진 후(오후 6시~) HOT/COOL/COLD 상태에서 bg-sunny 대신 사용.

### bg-evening.png

```
Pixel art evening sunset landscape scene, same composition and layout as
the reference sunny background image.
Same rolling green hills, same dirt path, same small colorful pixel flowers
(red, yellow, white) in the foreground, same style of fluffy clouds.
The KEY difference is the lighting and sky color:
- Sky transitions from warm ORANGE at the horizon to deep PURPLE-BLUE at the top
- A large warm orange-red setting sun low on the right side (half below horizon)
- Clouds are tinted pink and orange from the sunset
- Hills and grass have a warm golden-amber tint instead of bright green
- Flowers and ground have soft warm shadows
- Overall warm, cozy golden-hour palette — orange, amber, pink, soft purple
Same chunky pixel art style as the reference background.
Peaceful and cozy, not dark or scary. Still clearly visible.
No characters. No text. Same dimensions as reference image.
```
