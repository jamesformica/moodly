function Art() {
  this.initCanvas("canvas");
  this._status = document.getElementById("status");
  this._phrase = document.getElementById("phrase");
  this._stopBtn = document.getElementById("stop");

  this.phrases = [];
  this.attachEvents();
  this.initRecogniser();
  this.sentimenter = new Sentimenter(this);
  this.conductor = new Conductor(this._canvas);
}

Art.prototype.initCanvas = function (id) {
  this._canvas = document.getElementById(id);
  this._canvas.setAttribute('width', this._canvas.clientWidth);
  this._canvas.setAttribute('height', this._canvas.clientHeight);
};

Art.prototype.initRecogniser = function () {
  var mode = SDK.RecognitionMode.Dictation;
  var format = SDK.SpeechResultFormat.Simple;
  var key = '';

  this.phrases = [];
  this.recogniser = RecogniserSetup(SDK, mode, "en-US", format, key);
  RecogniserStart(SDK, this.recogniser, this);
};

Art.prototype.attachEvents = function () {
  this._stopBtn.onclick = function () {
    RecognizerStop(SDK, this.recogniser);
  }.bind(this);
};

Art.prototype.updateStatus = function (status, type) {
  this._status.innerText = status;
  this._status.classList.remove('info', 'success', 'error');
  switch (type) {
    case INFO:
      this._status.classList.add('info');
      break;
    case SUCCESS:
      this._status.classList.add('success');
      break;
    case ERROR:
      this._status.classList.add('error');
      break;
  }
};

Art.prototype.updatePartial = function (partial) {
  if (partial && partial.trim().length > 0) {
    if (this.wipeNextTime) {
      this._phrase.innerText = partial;
      this.wipeNextTime = false;
    } else {
      this._phrase.innerText += ' ' + partial;
    }
  }
};

Art.prototype.updatePhrase = function (phrase) {
  if (phrase && phrase.trim().length > 0) {
    this._phrase.innerText = phrase;

    var newPhrase = {
      id: Utils.guid(),
      phrase: phrase
    };

    this.phrases.push(newPhrase);
    this.sentimenter.analyse(newPhrase);
    this.wipeNextTime = true;
  }
};

Art.prototype.receiveSentiment = function (result) {
  var savedPhrase = this.phrases.find(function (p) { return p.id === result.id });
  savedPhrase.mood = Utils.getMood(result.score);
  savedPhrase.time = savedPhrase.phrase.length * 10;
  savedPhrase.score = result.score;

  this.conductor.orchastrate(Utils.getRandomBrush(), savedPhrase);
}

Art.prototype.onStop = function () {
  this._phrase.innerText = '';
};

new Art();