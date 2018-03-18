function ConsoleListener(receiver) {
  this.__proto__.OnEvent = function (loggedEvent) {
    if (loggedEvent.name === 'ConnectionEstablishErrorEvent') {
      receiver.updateStatus('Error connecting to Speech API', ERROR);
    }
  };
}
