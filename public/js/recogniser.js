function RecogniserSetup(SDK, recognitionMode, language, format, subscriptionKey) {
  var authentication = new SDK.CognitiveSubscriptionKeyAuthentication(subscriptionKey);
  var recognizerConfig = new SDK.RecognizerConfig(
    new SDK.SpeechConfig(
      new SDK.Context(
        new SDK.OS(navigator.userAgent, "Browser", null),
        new SDK.Device("SpeechSample", "SpeechSample", "1.0.00000"))),
    recognitionMode, language, format);

  return SDK.CreateRecognizer(recognizerConfig, authentication);
}

function RecogniserStart(SDK, recognizer, receiver) {
  recognizer.Recognize((event) => {
    switch (event.Name) {
      case "RecognitionTriggeredEvent":
        receiver.updateStatus("Initializing", INFO);
        break;
      case "ListeningStartedEvent":
        receiver.updateStatus("You may now talk", INFO);
        break;
      case "RecognitionStartedEvent":
        receiver.updateStatus("Listening to You", SUCCESS);
        break;
      case "SpeechHypothesisEvent":
        receiver.updatePartial(event.Result.Text);
        break;
      case "SpeechFragmentEvent":
        receiver.updatePartial(event.Result.Text);
        break;
      case "SpeechEndDetectedEvent":
        receiver.updateStatus("That's enough listening for now", INFO);
        receiver.onStop();
        break;
      case "SpeechSimplePhraseEvent":
        receiver.updatePhrase(event.Result.DisplayText);
        break;
      case "SpeechDetailedPhraseEvent":
        receiver.updatePhrase(event.Result.DisplayText);
        break;
    }
  }).On(() => { }, (error) => {
    receiver.updateStatus("Shits Broke Yo.. Sorry!", ERROR);
    console.error(error);
  });
}

function RecognizerStop(SDK, recognizer) {
  recognizer.AudioSource.TurnOff();
}