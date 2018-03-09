function KeysModal() {
  this.speechKey = localStorage.getItem('speech_key');
  this.textKey = localStorage.getItem('text_key');

  this._modal = document.getElementById('keysmodal');
  this._speechKeyTxt = document.getElementById('speechkey');
  this._textKeyTxt = document.getElementById('textkey');
  this._saveBtn = document.getElementById('savekeys');

  if (!this.hasKeys()) {
    this.show();
  } else {
    this._speechKeyTxt.value = this.speechKey;
    this._textKeyTxt.value = this.textKey;
  }

  this._saveBtn.onclick = this.save.bind(this);
}

KeysModal.prototype.save = function () {
  this.speechKey = this._speechKeyTxt.value;
  this.textKey = this._textKeyTxt.value;

  if (this.hasKeys()) {
    this.setKeys();
    this.hide();
  }
};

KeysModal.prototype.hasKeys = function () {
  return !!this.textKey && !!this.speechKey;
};

KeysModal.prototype.setKeys = function () {
  localStorage.setItem('speech_key', this.speechKey);
  localStorage.setItem('text_key', this.textKey);
};

KeysModal.prototype.show = function () {
  this._modal.classList.add('show');
};

KeysModal.prototype.hide = function () {
  this._modal.classList.remove('show');
};
