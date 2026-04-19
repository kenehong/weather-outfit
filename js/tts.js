// TTS module — uses local espeak server on Pi, falls back to Web Speech API
// Respects sensory modes: standard (normal), calm (slow & quiet), still (muted)

var TTS = (function() {
  var enabled = localStorage.getItem('tts-enabled') !== 'false';
  var lastSpoken = '';
  var speakTimeout = null;
  var synth = window.speechSynthesis || null;
  var TTS_SERVER = 'http://127.0.0.1:5111';
  var masterVolume = parseFloat(localStorage.getItem('tts-volume') || '80') / 100;

  var prefixes = {
    'hot': "It's hot today!",
    'cool': "It's a bit cool!",
    'cold': "Brrr, it's chilly!",
    'snowy': "Brrr, it's freezing!",
    'rainy': "It's raining!",
  };

  function speakViaServer(text, speed, volume) {
    var scaledVol = Math.round(volume * masterVolume);
    var url = TTS_SERVER + '/?text=' + encodeURIComponent(text) +
      '&speed=' + speed + '&volume=' + scaledVol;
    fetch(url).catch(function() {});
  }

  function speakViaWebAPI(text, sensoryMode) {
    if (!synth) return;
    synth.cancel();
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = sensoryMode === 'calm' ? 0.85 : 1.0;
    utterance.volume = masterVolume * (sensoryMode === 'calm' ? 0.5 : 1.0);
    synth.speak(utterance);
  }

  function speak(state, sensoryMode) {
    if (!enabled) return;
    if (sensoryMode === 'still') return;

    var text = (prefixes[state.id] || '') + ' ' + state.advice;

    if (text === lastSpoken) return;
    lastSpoken = text;

    clearTimeout(speakTimeout);

    speakTimeout = setTimeout(function() {
      var speed = sensoryMode === 'calm' ? 120 : 150;
      var volume = sensoryMode === 'calm' ? 50 : 80;

      // Try local TTS server first (Pi), fall back to Web Speech API
      fetch(TTS_SERVER + '/?text=').then(function() {
        speakViaServer(text, speed, volume);
      }).catch(function() {
        speakViaWebAPI(text, sensoryMode);
      });
    }, 300);
  }

  function setVolume(vol) {
    masterVolume = Math.max(0, Math.min(1, vol));
    lastSpoken = '';
  }

  function toggle() {
    enabled = !enabled;
    localStorage.setItem('tts-enabled', enabled);
    if (!enabled) {
      clearTimeout(speakTimeout);
      if (synth) synth.cancel();
    }
    lastSpoken = '';
    return enabled;
  }

  function isEnabled() { return enabled; }
  function reset() { lastSpoken = ''; }

  return { speak: speak, toggle: toggle, isEnabled: isEnabled, reset: reset, setVolume: setVolume };
})();
