function CurveStar(_canvas, result) {
  this._canvas = _canvas;
  this.context = _canvas.getContext('2d');
  this.mood = result.mood;

  this.colour = Colours.getMoodColour(this.mood);
  this.angles = [0, 45, 90, 135];
}

CurveStar.prototype.paint = function () {
  return CurveHelper.paint.call(this, 40, 20, this.paintStar);
};

CurveStar.prototype.paintStar = function (x, y) {
  this.context.beginPath();

  for (var i = 0; i < this.angles.length; i++) {
    this.context.save();
    this.context.globalAlpha = rando(2, 7) / 10;
    this.context.translate(x, y);
    this.context.rotate(this.angles[i] * Math.PI / 180);
    this.context.fillStyle = this.colour;
    this.context.fillRect(-1, -15, 2, 30);
    this.context.restore();
  }
};
