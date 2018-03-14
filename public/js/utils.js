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
  happyBrushes: [
    { brush: Bars, chance: 50 },
    { brush: Blanket, chance: 70 },
    { brush: Circles, chance: 80 },
    { brush: CurveBubble, chance: 60 },
    { brush: CurveLine, chance: 20 },
    { brush: CurveNet, chance: 60 },
    { brush: CurveSpray, chance: 40 },
    { brush: CurveStar, chance: 30 },
    { brush: Target, chance: 70 },
  ],

  neutralBrushes: [
    { brush: Bars, chance: 50 },
    { brush: Blanket, chance: 50 },
    { brush: Circles, chance: 50 },
    { brush: CurveBubble, chance: 50 },
    { brush: CurveLine, chance: 50 },
    { brush: CurveNet, chance: 50 },
    { brush: CurveSpray, chance: 50 },
    { brush: CurveStar, chance: 50 },
    { brush: Target, chance: 50 },
  ],

  sadBrushes: [
    { brush: Bars, chance: 60 },
    { brush: Blanket, chance: 70 },
    { brush: Circles, chance: 20 },
    { brush: CurveBubble, chance: 20 },
    { brush: CurveLine, chance: 80 },
    { brush: CurveNet, chance: 70 },
    { brush: CurveSpray, chance: 80 },
    { brush: CurveStar, chance: 90 },
    { brush: Target, chance: 40 },
  ],

  getMood: function (score) {
    if (score < 0.33) {
      return SAD;
    } else if (score < 0.66) {
      return NEUTRAL;
    } else {
      return HAPPY;
    }
  },

  getBrushSet: function (mood) {
    switch (mood) {
      case HAPPY:
        return this.happyBrushes;
      case NEUTRAL:
        return this.neutralBrushes;
      case SAD:
        return this.sadBrushes;
    }
  },

  getRandomBrush: function (mood) {
    var counter = 1;
    var theChosenBrush = null;
    var brushSet = this.getBrushSet(mood);

    do {
      var tempBrush = brushSet[rando(0, brushSet.length - 1)];
      var diceRoll = rando(1, 100);

      if (diceRoll <= tempBrush.chance || counter >= 10) {
        theChosenBrush = tempBrush.brush;
      }
    } while (!theChosenBrush && ++counter);

    return theChosenBrush;
  },

  guid: function () {
    return this.s4() + this.s4() + '-' + this.s4() + this.s4();
  },

  s4: function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
};
