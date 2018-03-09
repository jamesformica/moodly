function Conductor(_canvas) {
  this._canvas = _canvas;
  this.context = _canvas.getContext("2d");
  this.arrangement = [];
  this.conducting = false;
}

Conductor.prototype.orchastrate = function (brush, result) {
  this.arrangement.push({ brush: brush, result: result });

  if (!this.conducting) {
    this.play();
  }
};

Conductor.prototype.play = function () {
  this.conducting = true;

  var instrument = this.arrangement.shift();
  var brush = new instrument.brush(this._canvas, instrument.result);

  this.context.save();
  brush.paint().then(this.resolve.bind(this));
};

Conductor.prototype.resolve = function () {
  this.context.restore();

  if (this.arrangement.length > 0) {
    this.play();
  } else {
    this.conducting = false;
  }
};