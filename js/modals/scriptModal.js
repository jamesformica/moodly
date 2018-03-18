function ScriptModal() {
  this._modal = document.getElementById('scriptmodal');
  this._content = document.getElementById('scriptcontent');

  document.getElementById('closescript').onclick = this.hide.bind(this);
}

ScriptModal.prototype.hide = function () {
  this._modal.classList.remove('show');
};

ScriptModal.prototype.show = function (phrases) {
  while (this._content.lastChild) {
    this._content.removeChild(this._content.lastChild);
  }

  for (var i = 0; i < phrases.length; i++) {
    var _li = document.createElement('li');
    _li.innerText = phrases[i].phrase;
    _li.setAttribute('data-mood', phrases[i].mood);

    this._content.appendChild(_li);
  }

  this._modal.classList.add('show');
};
