# Gemini Image Prompts — Weather Outfit App (v3)

> 걷기 애니메이션 + 옷이 핵심!
> 캐릭터마다 2프레임 (손발 방향 교차 걷기 루프)
> 한 프롬프트로 2프레임을 나란히 생성 — Gemini에 한번에 요청
> 온도별 옷차림이 한눈에 보이도록 — ASD 아이들이 뭘 입어야 하는지 캐릭터만 보면 알 수 있게

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
