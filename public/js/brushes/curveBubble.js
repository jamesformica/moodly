function CurveBubble(_canvas, result) {
  this._canvas = _canvas;
  this.context = _canvas.getContext("2d");
  this.mood = result.mood;
  this.time = result.time;
};

CurveBubble.prototype.paint = function () {
  return new Promise(function (resolve) {
    this.colour = getMoodColour(this.mood);
    var keyPoints = CurveHelper.getKeyPoints(this.mood, this._canvas);
    var curvePoints = CurveHelper.getCurvePoints(keyPoints, this.mood, 10);

    var index = 0;
    var interval = setInterval(function () {
      if (index >= curvePoints.length - 1) {
        clearInterval(interval);
        resolve();
        return;
      }

      var x = curvePoints[index];
      var y = curvePoints[index + 1];
      index += 2;

      this.paintCircle(x, y);
    }.bind(this), 100);
  }.bind(this));
};

CurveBubble.prototype.paintCircle = function (x, y) {
  var radius = rando(this._canvas.height * 0.01, this._canvas.height * 0.03);

  this.context.beginPath();
  this.context.globalAlpha = rando(2, 7) / 10;
  this.context.arc(x, y, radius, 0, 2 * Math.PI, false);
  this.context.fillStyle = this.colour;
  this.context.fill();
};
