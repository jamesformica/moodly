function StartCanvas(id) {
  this.initCanvas(id);
  //window.startMoodOnlyGreys = true;

  this.testOne(CurveBubble);
}


StartCanvas.prototype.initCanvas = function (id) {
  this._canvas = document.getElementById(id);
  this._canvas.setAttribute('width', this._canvas.clientWidth);
  this._canvas.setAttribute('height', this._canvas.clientHeight);
  this.context = this._canvas.getContext('2d');
};

StartCanvas.prototype.testAll = function () {
  var lastClear = new Date();
  var interval = setInterval(function () {
    if (new Date() - lastClear > 30000) {
      clearInterval(interval);
    }

    var mood = getMood(Math.random());
    this.context.save();
    var brush = getRandomBrush();
    var time = rando(100, 800);
    new brush(this._canvas, this.context, mood, time);
    this.context.restore();
  }.bind(this), 3000);
};

StartCanvas.prototype.testOne = function (brush) {
  var mood = getMood(Math.random());
  this.context.save();
  var time = rando(100, 800);
  new brush(this._canvas, this.context, mood, time);
  this.context.restore();
};

new StartCanvas('start-canvas');