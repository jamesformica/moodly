function CurveBubble(_canvas, result) {
  this._canvas = _canvas;
  this.context = _canvas.getContext("2d");
  this.mood = result.mood;
  this.time = result.time;

  this.colour = getMoodColour(this.mood);
}

CurveBubble.prototype.paint = function () {
  return CurveHelper.paint.call(this, 10, 100, this.paintCircle);
};

CurveBubble.prototype.paintCircle = function (x, y) {
  var radius = rando(this._canvas.height * 0.01, this._canvas.height * 0.03);

  this.context.beginPath();
  this.context.globalAlpha = rando(2, 7) / 10;
  this.context.arc(x, y, radius, 0, 2 * Math.PI, false);
  this.context.fillStyle = this.colour;
  this.context.fill();
};
