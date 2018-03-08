function Art() {
  this.phrases = [];
  this.initCanvas("canvas");
  this._status = document.getElementById("status");
  this._phrase = document.getElementById("phrase");

  this.attachEvents();
  this.keysModal = new KeysModal();
  this.scriptModal = new ScriptModal();
  this.conductor = new Conductor(this._canvas);

  if (this.keysModal.hasKeys()) {
    this.initRecogniser();
  }
}

Art.prototype.initCanvas = function (id) {
  this._canvas = document.getElementById(id);
  this._canvas.setAttribute('width', this._canvas.clientWidth);
  this._canvas.setAttribute('height', this._canvas.clientHeight);
};

Art.prototype.initRecogniser = function () {
  var mode = SDK.RecognitionMode.Dictation;
  var format = SDK.SpeechResultFormat.Simple;

  this.phrases = [];
  this.recogniser = RecogniserSetup(SDK, mode, "en-US", format, this.keysModal.speechKey);
  this.sentimenter = new Sentimenter(this, this.keysModal.textKey);

  RecogniserStart(SDK, this.recogniser, this);
};

Art.prototype.attachEvents = function () {
  document.getElementById("keys").onclick = function () {
    this.keysModal.show();
  }.bind(this);

  document.getElementById("mic").onclick = function () {
    this.initRecogniser();
  }.bind(this);

  document.getElementById("mic_off").onclick = function () {
    RecognizerStop(SDK, this.recogniser);
  }.bind(this);

  document.getElementById("stop").onclick = function () {
    location.reload();
  }.bind(this);

  document.getElementById("script").onclick = function () {
    this.scriptModal.show(this.phrases);
  }.bind(this);

  var _image = document.getElementById("image");
  _image.onclick = function () {
    _image.href = this._canvas.toDataURL();
    _image.download = "snapshot.png";
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