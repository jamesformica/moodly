function CurveLine(_canvas, result) {
  this._canvas = _canvas;
  this.context = _canvas.getContext('2d');
  this.mood = result.mood;

  switch (this.mood) {
    case HAPPY:
      this.time = rando(40, 50);
      this.alpha = rando(1, 3) / 10;
      break;
    case NEUTRAL:
      this.time = rando(20, 40);
      this.alpha = rando(4, 6) / 10;
      break;
    case SAD:
      this.time = rando(3, 5);
      this.alpha = rando(4, 10) / 10;
      break;
  }

  this.colour = Colours.getMoodColour(this.mood);
  this.lineWidth = CurveHelper.getLineWidth(this.mood);
}

CurveLine.prototype.paint = function () {
  return CurveHelper.paint.call(this, 20, this.time, this.paintLine);
};

CurveLine.prototype.paintLine = function (x, y, index, curvePoints) {
  if (index === 0) {

    this.context.globalAlpha = this.alpha;
    this.context.strokeStyle = this.colour;
    this.context.lineJoin = 'round';
    this.context.lineWidth = this.lineWidth;
  } else {
    this.context.beginPath();
    this.context.moveTo(curvePoints[index - 2], curvePoints[index - 1]);
    this.context.lineTo(x, y);
    this.context.stroke();
  }
};
