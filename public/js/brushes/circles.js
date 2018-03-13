function Circles(_canvas, result) {
  this._canvas = _canvas;
  this.context = _canvas.getContext('2d');
  this.mood = result.mood;

  this.number = rando(3, 6);
}

Circles.prototype.paint = function () {
  return BrushHelper.paintIterator.call(this, this.number, 200, this.paintCircle);
};

Circles.prototype.paintCircle = function () {
  var x = rando(0, this._canvas.width);
  var y = rando(0, this._canvas.height);
  var radius = rando(20, 300);

  this.context.beginPath();
  this.context.globalAlpha = rando(2, 4) / 10;
  this.context.fillStyle = Colours.getMoodColour(this.mood);
  this.context.arc(x, y, radius, 0, 2 * Math.PI, false);
  this.context.fill();
};
