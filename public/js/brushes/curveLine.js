function CurveLine(_canvas, result) {
  this._canvas = _canvas;
  this.context = _canvas.getContext("2d");
  this.mood = result.mood;
  this.time = result.time;
}

CurveLine.prototype.paint = function () {
  return new Promise(function (resolve) {
    this.colour = getMoodColour(this.mood);
    this.lineWidth = CurveHelper.getLineWidth(this.mood);
    var keyPoints = CurveHelper.getKeyPoints(this.mood, this._canvas);
    var curvePoints = CurveHelper.getCurvePoints(keyPoints, this.mood, 20);

    var index = 0;
    var interval = setInterval(function () {
      if (index >= curvePoints.length - 1) {
        clearInterval(interval);
        resolve();
        return;
      }

      var x = curvePoints[index];
      var y = curvePoints[index + 1];
      this.paintLine(index, x, y);

      index += 2;
    }.bind(this), 50);
  }.bind(this));
};

CurveLine.prototype.paintLine = function (index, x, y) {
  if (index === 0) {
    this.context.beginPath();
    this.context.moveTo(x, y);
  } else {
    this.context.strokeStyle = this.colour;
    this.context.lineJoin = 'round';
    this.context.lineWidth = this.lineWidth;
    this.context.lineTo(x, y);
    this.context.stroke();
  }
}