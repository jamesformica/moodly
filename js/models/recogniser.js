function Recogniser(recognitionMode, language, format, subscriptionKey) {
  var authentication = new SDK.CognitiveSubscriptionKeyAuthentication(subscriptionKey);
  var recogniserConfig = new SDK.RecognizerConfig(
    new SDK.SpeechConfig(
      new SDK.Context(
        new SDK.OS(navigator.userAgent, 'Browser', null),
        new SDK.Device('SpeechSample', 'SpeechSample', '1.0.00000'))),
    recognitionMode, language, format);

  this.recogniser = SDK.CreateRecognizer(recogniserConfig, authentication);
}

Recogniser.prototype.start = function (receiver) {
  this.recogniser.Recognize(function (event) {
    switch (event.Name) {
      case 'RecognitionTriggeredEvent':
        receiver.updateStatus('Initializing', INFO);
        break;
      case 'ListeningStartedEvent':
        receiver.updateStatus('You may now talk', INFO);
        break;
      case 'RecognitionStartedEvent':
        receiver.updateStatus('Listening to You', SUCCESS);
        break;
      case 'SpeechHypothesisEvent':
        receiver.updatePartial(event.Result.Text);
        break;
      case 'SpeechFragmentEvent':
        receiver.updatePartial(event.Result.Text);
        break;
      case 'SpeechEndDetectedEvent':
        receiver.updateStatus('No longer listening', INFO);
        receiver.onStop();
        break;
      case 'SpeechSimplePhraseEvent':
        receiver.updatePhrase(event.Result.DisplayText);
        break;
      case 'SpeechDetailedPhraseEvent':
        receiver.updatePhrase(event.Result.DisplayText);
        break;
    }
  }).On(
    function () { },

    function (error) {
      receiver.updateStatus('Shits Broke Yo.. Sorry!', ERROR);
    });
};

Recogniser.prototype.stop = function () {
  this.recogniser.AudioSource.TurnOff();
};
