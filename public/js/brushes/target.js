function Target(_canvas, result) {
  this._canvas = _canvas;
  this.context = _canvas.getContext('2d');
  this.mood = result.mood;

  this.number = rando(3, 4);
  this.x = rando(0, this._canvas.width);
  this.y = rando(0, this._canvas.height);
}

Target.prototype.paint = function () {
  return BrushHelper.paintIterator.call(this, this.number, 200, this.paintRing);
};

Target.prototype.paintRing = function () {
  var radius = rando(20, 200);

  this.context.beginPath();
  this.context.globalAlpha = rando(1, 3) / 10;
  this.context.fillStyle = Colours.getMoodColour(this.mood);
  this.context.arc(this.x, this.y, radius, 0, 2 * Math.PI, false);
  this.context.fill();
};
