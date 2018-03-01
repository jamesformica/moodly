HAPPY = 'happy';
NEUTRAL = 'neutral';
SAD = 'sad';

function getMood(score) {
  if (score < 0.33) {
    return SAD;
  } else if (score < 0.66) {
    return NEUTRAL;
  } else {
    return HAPPY;
  }
}

function rando(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomBrush() {
  var brushes = [
    Bars,
    Blanket
  ];

  return brushes[rando(0, brushes.length - 1)];
}