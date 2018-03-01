function StartCanvas(id) {
  this.initCanvas(id);
  window.startMoodOnlyGreys = true;

  var lastClear = new Date();
  var interval = setInterval(function () {
    if (new Date() - lastClear > 30000) {
      clearInterval(interval);
    }

    var mood = getMood(Math.random());
    this.context.save();
    var brush = getRandomBrush();
    new brush(this._canvas, this.context, mood, 800);
    this.context.restore();
  }.bind(this), 3000);
}

StartCanvas.prototype.initCanvas = function (id) {
  this._canvas = document.getElementById(id);
  this._canvas.setAttribute('width', this._canvas.clientWidth);
  this._canvas.setAttribute('height', this._canvas.clientHeight);
  this.context = this._canvas.getContext('2d');
};

new StartCanvas('start-canvas');