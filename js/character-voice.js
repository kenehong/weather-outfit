// Character click voice — plays pre-generated ElevenLabs MP3s based on weather state.
// Independent of TTS module (which handles auto weather announcements).

var CharacterVoice = (function() {
  var LINES_PER_STATE = 3;
  var lastIndex = {};
  var current = null;
  var masterVolume = parseFloat(localStorage.getItem('tts-volume') || '80') / 100;

  function pick(stateId) {
    var n = Math.floor(Math.random() * LINES_PER_STATE) + 1;
    if (LINES_PER_STATE > 1 && n === lastIndex[stateId]) {
      n = (n % LINES_PER_STATE) + 1;
    }
    lastIndex[stateId] = n;
    return 'assets/audio/' + stateId + '-' + n + '.mp3';
  }

  function play(state) {
    if (!state) return;
    if (masterVolume <= 0) return;
    if (current) { current.pause(); current.currentTime = 0; }
    var id = state.voiceId || state.id;
    current = new Audio(pick(id));
    current.volume = masterVolume;
    current.play().catch(function(err) {
      console.warn('Character voice play failed:', err);
    });
  }

  function setVolume(v) {
    masterVolume = Math.max(0, Math.min(1, v));
  }

  return { play: play, setVolume: setVolume };
})();
