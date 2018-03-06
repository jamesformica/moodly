HAPPY = 'happy';
NEUTRAL = 'neutral';
SAD = 'sad';

function rando(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Utils = {
  getMood: function(score) {
    if (score < 0.33) {
      return SAD;
    } else if (score < 0.66) {
      return NEUTRAL;
    } else {
      return HAPPY;
    }
  },

  getRandomBrush: function() {
    var brushes = [
      Bars,
      Blanket,
      CurveBubble,
      CurveLine,
      CurveNet,
    ];

    return brushes[rando(0, brushes.length - 1)];
  }
}
