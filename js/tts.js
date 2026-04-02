// TTS module — calls local espeak server on Pi
// Respects sensory modes: standard (normal), calm (slow & quiet), still (muted)

var TTS = (function() {
  var enabled = localStorage.getItem('tts-enabled') !== 'false';
  var lastSpoken = '';
  var speakTimeout = null;

  var prefixes = {
    'shiba-hot': "It's hot today!",
    'shiba-cool': "It's a bit cool!",
    'bear-cold': "Brrr, it's cold!",
    'duck-rainy': "It's raining!",
  };

  function speak(state, sensoryMode) {
    if (!enabled) return;
    if (sensoryMode === 'still') return;

    var text = (prefixes[state.id] || '') + ' ' + state.advice;

    if (text === lastSpoken) return;
    lastSpoken = text;

    clearTimeout(speakTimeout);

    var speed = '150';
    var volume = '80';
    if (sensoryMode === 'calm') {
      speed = '130';
      volume = '40';
    }

    speakTimeout = setTimeout(function() {
      var url = 'http://localhost:5111/?text=' + encodeURIComponent(text)
        + '&speed=' + speed + '&volume=' + volume;
      fetch(url).catch(function() {});
    }, 300);
  }

  function toggle() {
    enabled = !enabled;
    localStorage.setItem('tts-enabled', enabled);
    if (!enabled) {
      clearTimeout(speakTimeout);
      lastSpoken = '';
    }
    return enabled;
  }

  function isEnabled() { return enabled; }
  function reset() { lastSpoken = ''; }

  return { speak: speak, toggle: toggle, isEnabled: isEnabled, reset: reset };
})();
