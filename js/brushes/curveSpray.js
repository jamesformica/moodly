function CurveSpray(_canvas, result) {
  this._canvas = _canvas;
  this.context = _canvas.getContext('2d');
  this.mood = result.mood;
  this.width = 50;
  this.height = 50;
  this.colour = Colours.getMoodColour(this.mood);

  switch (this.mood) {
    case HAPPY:
      this.time = rando(40, 50);
      this.rainbowMode = rando(0, 2) === 0;
      break;
    case NEUTRAL:
      this.time = rando(20, 40);
      break;
    case SAD:
      this.time = rando(3, 5);
      break;
  }
}

CurveSpray.prototype.paint = function () {
  return CurveHelper.paint.call(this, 20, this.time, this.paintSpray);
};

CurveSpray.prototype.paintSpray = function (x, y) {
  var randomPoints = this.getRandomPoints(x, y);

  for (var i = 0; i < randomPoints.length; i += 2) {
    if (this.rainbowMode) {
      this.colour = Colours.getMoodColour(this.mood);
    }

    this.context.beginPath();
    this.context.globalAlpha = rando(5, 10) / 10;
    this.context.fillStyle = this.colour;
    this.context.fillRect(randomPoints[i], randomPoints[i + 1], 2, 2);
  }
};

CurveSpray.prototype.getRandomPoints = function (x, y) {
  var randomPoints = [];
  var halfWidth = this.width / 2;
  var halfHeight = this.height / 2;

  for (var i = 0; i < 50; i++) {
    var rX = rando(x - halfWidth, x + halfWidth);
    var rY = rando(y - halfHeight, y + halfHeight);
    randomPoints.push(rX, rY);
  }

  return randomPoints;
};
