function StartCanvas(id) {
  this.initCanvas(id);
  window.startMoodOnlyGreys = true;

  this.testOne(CurveBubble);
  this.testOne(CurveLine);
  this.testOne(Bars);
  this.testOne(Blanket);
  //this.testAll();
}


StartCanvas.prototype.initCanvas = function (id) {
  this._canvas = document.getElementById(id);
  this._canvas.setAttribute('width', this._canvas.clientWidth);
  this._canvas.setAttribute('height', this._canvas.clientHeight);
  this.context = this._canvas.getContext('2d');
  this.context.save();

  this.conductor = new Conductor(this._canvas);
};

StartCanvas.prototype.testAll = function () {
  var lastClear = new Date();
  setInterval(function () {
    if (new Date() - lastClear > 30000) {
      lastClear = new Date();
      this.context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    var mood = Utils.getMood(Math.random());
    var brush = Utils.getRandomBrush();
    var time = rando(100, 800);
    new brush(this._canvas, this.context, mood, time);
  }.bind(this), 3000);
};

StartCanvas.prototype.testOne = function (brush) {
  var mood = Utils.getMood(Math.random());
  var time = rando(100, 800);

  var result = {
    mood: mood,
    time: time
  };

  this.conductor.orchastrate(brush, result);
};

new StartCanvas('start-canvas');