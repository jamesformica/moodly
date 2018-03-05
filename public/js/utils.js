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
    Blanket,
    CurveBubble,
    CurveLine,
  ];

  return brushes[rando(0, brushes.length - 1)];
}

function getRandomPoints(time, _canvas) {
  var points = [];
  var numPoints = Math.max(time / 100, 5); // at least 5

  for (var i = 0; i < numPoints; i++) {
    var x = rando(0, _canvas.width);
    var y = rando(0, _canvas.height);
    points.push(x, y);
  }

  return points;
}