function CurveLine(_canvas, result) {
  this._canvas = _canvas;
  this.context = _canvas.getContext("2d");
  this.mood = result.mood;
  this.time = result.time;

  this.colour = getMoodColour(this.mood);
  this.alpha = CurveHelper.getLineAlpha(this.mood);
  this.lineWidth = CurveHelper.getLineWidth(this.mood);
}

CurveLine.prototype.paint = function () {
  return CurveHelper.paint.call(this, 20, 50, this.paintLine);
};

CurveLine.prototype.paintLine = function (x, y, index) {
  if (index === 0) {
    this.context.beginPath();
    this.context.globalAlpha = this.alpha;
    this.context.moveTo(x, y);
  } else {
    this.context.strokeStyle = this.colour;
    this.context.lineJoin = 'round';
    this.context.lineWidth = this.lineWidth;
    this.context.lineTo(x, y);
    this.context.stroke();
  }
}