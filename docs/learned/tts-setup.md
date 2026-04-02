# TTS (음성 안내) 셋업 기록

## 뭘 했나

아마존에서 산 **USB 사운드카드** (USB PnP Audio Device, 8Ω 5W 스피커)를 라즈베리 파이에 꽂고,
날씨 앱이 **옷차림 안내를 소리로 읽어주도록** TTS 기능을 추가했다.

## 구조 (어떻게 작동하나)

```
[브라우저 앱] --fetch--> [tts-server.py :5111] --espeak--> [USB 사운드카드 스피커]
```

1. 앱이 날씨를 가져와서 캐릭터 상태를 결정 (HOT/COOL/COLD/RAINY)
2. `tts.js`가 해당 상태의 안내 메시지를 `localhost:5111`로 보냄
3. `tts-server.py` (Python HTTP 서버)가 `espeak`로 음성 생성 → USB 사운드카드로 출력

## 추가/변경된 파일

| 파일 | 역할 |
|------|------|
| `js/tts.js` | 브라우저에서 TTS 서버 호출 (감각 모드 연동) |
| `tts-server.py` | Pi에서 돌아가는 espeak TTS 서버 (port 5111) |
| `index.html` | 사이드바에 🔊 VOICE 토글 버튼 추가, TTS 연동 |
| `js/app.js` | 날씨 로드 후 TTS reset 호출 추가 |

## 감각 모드별 동작

| 모드 | 음성 | 속도 | 볼륨 |
|------|------|------|------|
| Standard | O | 150 | 80% |
| Calm | O | 130 (느리게) | 40% (조용히) |
| Still | X (음소거) | — | — |

## Pi 오디오 설정

- USB 사운드카드: ALSA **card 3**
- `/etc/asound.conf` → card 3을 기본 출력으로 설정
- 스피커 볼륨: 10% (amixer)
- espeak 설치: `sudo apt install espeak`

## 왜 이렇게 했나 (브라우저 TTS 대신 espeak)

처음엔 브라우저 Web Speech API (`speechSynthesis`)로 했지만,
**Pi의 Chromium에서 speechSynthesis가 작동하지 않았다.**
그래서 Pi에서 직접 `espeak` → `aplay`로 소리를 내는 로컬 HTTP 서버 방식으로 전환.

## 알아둘 것

- Pi 재부팅하면 `tts-server.py` 수동 실행 필요: `python3 ~/weather-outfit/tts-server.py &`
- scp가 안 되서 Mac→Pi 파일 전송은 Mac에서 HTTP 서버 띄우고 Pi에서 curl로 받음
- SSH IP가 `192.168.6.185` → `192.168.4.37`로 바뀜 (DHCP)
- espeak 음질이 로봇 같음 → **다음 작업: Piper TTS로 교체 예정**
