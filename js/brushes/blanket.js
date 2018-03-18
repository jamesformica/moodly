function Blanket(_canvas, result) {
  this._canvas = _canvas;
  this.context = _canvas.getContext('2d');
  this.mood = result.mood;
}

Blanket.prototype.paint = function () {
  return new Promise(function (resolve) {
    var type = rando(0, 2);
    switch (type) {
      case 0:
        this.paintLeft();
        break;
      case 1:
        this.paintRight();
        break;
      case 2:
        this.paintMiddle();
        break;
    }
    resolve();
  }.bind(this));
};

Blanket.prototype.paintLeft = function () {
  var p1 = [0, 0];
  var p2 = [rando(this._canvas.width * 0.1, this._canvas.width * 0.3), 0];
  var p3 = [rando(this._canvas.width * 0.1, this._canvas.width * 0.3), this._canvas.height];

  if (this.mood !== SAD) {
    var p4 = [0, this._canvas.height];
    return this.paintBlanket(p1, p2, p3, p4);
  }

  this.paintBlanket(p1, p2, p3);
};

Blanket.prototype.paintRight = function () {
  var p1 = [this._canvas.width, 0];
  var p2 = [rando(this._canvas.width * 0.7, this._canvas.width * 0.9), 0];
  var p3 = [rando(this._canvas.width * 0.7, this._canvas.width * 0.9), this._canvas.height];

  if (this.mood !== SAD) {
    var p4 = [this._canvas.width, this._canvas.height];
    return this.paintBlanket(p1, p2, p3, p4);
  }

  this.paintBlanket(p1, p2, p3);
};

Blanket.prototype.paintMiddle = function () {
  var p1 = [rando(this._canvas.width * 0.2, this._canvas.width * 0.3), 0];
  var p2 = [rando(this._canvas.width * 0.5, this._canvas.width * 0.6), 0];
  var p3 = [rando(this._canvas.width * 0.5, this._canvas.width * 0.6), this._canvas.height];

  if (this.mood !== SAD) {
    var p4 = [rando(this._canvas.width * 0.2, this._canvas.width * 0.3), this._canvas.height];
    return this.paintBlanket(p1, p2, p3, p4);
  }

  this.paintBlanket(p1, p2, p3);
};

Blanket.prototype.paintBlanket = function () {
  this.context.beginPath();

  this.context.globalAlpha = rando(2, 4) / 10;
  this.context.fillStyle = Colours.getMoodColour(this.mood);

  for (var i = 0; i < arguments.length; i++) {
    if (i === 0) {
      this.context.moveTo(arguments[i][0], arguments[i][1]);
    } else {
      this.context.lineTo(arguments[i][0], arguments[i][1]);
    }
  }

  this.context.fill();
};
