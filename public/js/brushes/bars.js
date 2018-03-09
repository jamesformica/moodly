function Bars(_canvas, result) {
  this._canvas = _canvas;
  this.context = _canvas.getContext("2d");
  this.mood = result.mood;
  this.time = result.time;

  this.init();
}

Bars.prototype.init = function () {
  switch (this.mood) {
    case HAPPY:
      this.number = rando(10, 15);
      break;
    case NEUTRAL:
      this.number = rando(5, 10);
      break;
    case SAD:
      this.number = rando(3, 6);
      break;
  }
};

Bars.prototype.paint = function () {
  return new Promise(function (resolve) {
    var interval = setInterval(function () {
      if (this.number === 0) {
        clearInterval(interval);
        resolve();
        return;
      }

      switch (this.mood) {
        case HAPPY:
          this.paintTop();
          break;
        case NEUTRAL:
          this.paintSide();
          break;
        case SAD:
          this.paintBottom();
          break;
      }

      this.number -= 1;
    }.bind(this), this.time);
  }.bind(this));
};

Bars.prototype.paintBottom = function () {
  var thickness = rando(15, 23);
  var height = rando(this._canvas.height * 0.3, this._canvas.height * 0.6);
  var x = rando(0, this._canvas.width);
  var y = this._canvas.height - height;

  this.paintBar(x, y, thickness, height);
};

Bars.prototype.paintTop = function () {
  var thickness = rando(5, 15);
  var height = rando(this._canvas.height * 0.2, this._canvas.height * 0.8);
  var x = rando(0, this._canvas.width);
  var y = 0;

  this.paintBar(x, y, thickness, height);
};

Bars.prototype.paintSide = function () {
  var thickness = rando(10, 25);
  var length = rando(this._canvas.width * 0.1, this._canvas.width * 0.3);
  var x;
  var y = rando(0, this._canvas.height);
  if (rando(0, 1)) {
    x = 0;
  } else {
    x = this._canvas.width - length;
  }

  this.paintBar(x, y, length, thickness);
};

Bars.prototype.paintBar = function (x, y, width, height) {
  this.context.beginPath();
  this.context.globalAlpha = rando(2, 5) / 10;
  this.context.fillStyle = Colours.getMoodColour(this.mood);
  this.context.fillRect(x, y, width, height);
};