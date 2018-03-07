function StartCanvas(id) {
  this.initCanvas(id);
  this.conductor = new Conductor(this._canvas);
  //window.startMoodOnlyGreys = true;

  //this.testOne(CurveLine);
  this.testAll();
}


StartCanvas.prototype.initCanvas = function (id) {
  this._canvas = document.getElementById(id);
  this._canvas.setAttribute('width', this._canvas.clientWidth);
  this._canvas.setAttribute('height', this._canvas.clientHeight);
  this.context = this._canvas.getContext('2d');
};

StartCanvas.prototype.testAll = function () {
  var lastClear = new Date();
  setInterval(function () {
    if (new Date() - lastClear > 60000) {
      lastClear = new Date();
      this.context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    var brush = Utils.getRandomBrush();
    var result = {
      mood: Utils.getMood(0.8),
      time: rando(100, 800)
    };

    this.conductor.orchastrate(brush, result);
  }.bind(this), 3000);
};

StartCanvas.prototype.testOne = function (brush) {
  var result = {
    mood: Utils.getMood(0.9),
    time: rando(100, 800)
  };

  this.conductor.orchastrate(brush, result);
};

new StartCanvas('start-canvas');