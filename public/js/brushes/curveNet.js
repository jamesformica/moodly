function CurveNet(_canvas, result) {
  this._canvas = _canvas;
  this.context = _canvas.getContext("2d");
  this.mood = result.mood;
  this.time = result.time;

  this.colour1 = getMoodColour(this.mood);
  this.colour2 = getMoodColour(this.mood);
  this.lineWidth = CurveHelper.getLineWidth(this.mood);
}

CurveNet.prototype.paint = function () {
  return CurveHelper.paint.call(this, 20, 50, this.paintNet);
};

CurveNet.prototype.paintNet = function (x, y, index, curvePoints) {
  this.context.beginPath();
  var beginIndex = Math.max(0, index - 30);
  this.context.strokeStyle = this.colour2;
  this.context.lineWidth = 1;
  this.context.moveTo(curvePoints[beginIndex], curvePoints[beginIndex + 1]);
  this.context.lineTo(curvePoints[index], curvePoints[index + 1]);
  this.context.stroke();
}
