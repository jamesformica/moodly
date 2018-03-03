function CurveBubble(canvas, context, mood, time) {
  this._canvas = canvas;
  this.context = context;
  this.mood = mood;
  this.time = time;
  this.points = [];

  this.init();
  this.paint();
};

CurveBubble.prototype.init = function () {
  var numPoints = Math.max(this.time / 100, 5);
  for (var i = 0; i < numPoints; i++) {
    var x = rando(0, this._canvas.width);
    var y = rando(0, this._canvas.height);
    this.points.push(x, y);
  }
};

CurveBubble.prototype.paint = function () {
  this.colour = getMoodColour(this.mood);

  var index = 0;
  var curvePoints = getCurvePoints(this.points, 0.5, 10);

  var interval = setInterval(function() {
    if (curvePoints.length === 0) {
      clearInterval(interval);
      return;
    }

    var x = curvePoints[index];
    var y = curvePoints[index + 1];
    index += 2;

    this.paintCircle(x, y);
  }.bind(this), 100);
};

CurveBubble.prototype.paintCircle = function (x, y) {
  this.context.globalAlpha = rando(2, 7) / 10;
  var radius = rando(this._canvas.height * 0.01, this._canvas.height * 0.03);
  this.context.beginPath();
  this.context.arc(x, y, radius, 0, 2 * Math.PI, false);
  this.context.fillStyle = this.colour;
  this.context.fill();
};
