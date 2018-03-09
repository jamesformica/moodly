function CurveLine(_canvas, result) {
  this._canvas = _canvas;
  this.context = _canvas.getContext('2d');
  this.mood = result.mood;
  this.time = result.time;

  this.colour = Colours.getMoodColour(this.mood);
  this.alpha = CurveHelper.getLineAlpha(this.mood);
  this.lineWidth = CurveHelper.getLineWidth(this.mood);
}

CurveLine.prototype.paint = function () {
  return CurveHelper.paint.call(this, 20, 40, this.paintLine);
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
