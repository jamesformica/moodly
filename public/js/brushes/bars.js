function Bars(canvas, context, mood, time) {
  this._canvas = canvas;
  this.context = context;
  this.mood = mood;
  this.time = time;

  this.init();
  this.paint();
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
  if (this.number === 0) return;

  setTimeout(function () {
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
    this.paint();
  }.bind(this), this.time);
}

Bars.prototype.paintBottom = function () {
  var thickness = rando(70, 85);
  var height = rando(this._canvas.height * 0.3, this._canvas.height * 0.6);
  var x = rando(0, this._canvas.width);
  var y = this._canvas.height - height;

  this.paintBar(x, y, thickness, height);
}

Bars.prototype.paintTop = function () {
  var thickness = rando(5, 15);
  var height = rando(this._canvas.height * 0.2, this._canvas.height * 0.8);
  var x = rando(0, this._canvas.width);
  var y = 0;

  this.paintBar(x, y, thickness, height);
}

Bars.prototype.paintSide = function () {
  var thickness = rando(30, 50);
  var length = rando(this._canvas.width * 0.1, this._canvas.width * 0.3);
  var y = rando(0, this._canvas.height);
  if (rando(0, 1)) {
    var x = 0;
  } else {
    var x = this._canvas.width - length;
  }

  this.paintBar(x, y, length, thickness);
}

Bars.prototype.paintBar = function (x, y, width, height) {
  this.context.globalAlpha = rando(2, 10) / 10;
  this.context.fillStyle = getMoodColour(this.mood);
  this.context.fillRect(x, y, width, height);
}