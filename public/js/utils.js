HAPPY = 'happy';
NEUTRAL = 'neutral';
SAD = 'sad';

INFO = 'info';
SUCCESS = 'success';
ERROR = 'error';

function rando(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Utils = {
  getMood: function (score) {
    if (score < 0.33) {
      return SAD;
    } else if (score < 0.66) {
      return NEUTRAL;
    } else {
      return HAPPY;
    }
  },

  getRandomBrush: function () {
    var brushes = [
      Bars,
      Blanket,
      CurveBubble,
      CurveLine,
      CurveNet,
      CurveSpray,
      CurveStar,
    ];

    return brushes[rando(0, brushes.length - 1)];
  },

  guid: function () {
    return this.s4() + this.s4() + '-' + this.s4() + this.s4();
  },

  s4: function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
};
