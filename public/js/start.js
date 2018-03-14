function StartCanvas(id) {
  this.initCanvas(id);
  this.attachEvents();
  this.conductor = new Conductor(this._canvas);

  window.startMoodOnlyGreys = true;

  this.testAll();
  //this.testOne(CurveSpray);
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

    var mood = Utils.getMood(0.5);
    var brush = Utils.getRandomBrush(mood);
    var result = {
      mood: mood,
      time: rando(100, 800),
    };

    this.conductor.orchastrate(brush, result);
  }.bind(this), 3000);
};

StartCanvas.prototype.testOne = function (brush) {
  var result = {
    mood: Utils.getMood(0.1),
    time: rando(100, 800),
  };

  this.conductor.orchastrate(brush, result);
};

StartCanvas.prototype.attachEvents = function () {
  var wtfModal = document.getElementById('wtfmodal');

  document.getElementById('wtf').onclick = function () {
    wtfModal.classList.add('show');
  };

  document.getElementById('closewtf').onclick = function () {
    wtfModal.classList.remove('show');
  };
};

window.onload = function () {
  new StartCanvas('start-canvas');
};
