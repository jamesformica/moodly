function Sentimenter(receiver, key) {
  this.receiver = receiver;
  this.key = key;
}

Sentimenter.prototype.analyse = function (result) {
  axios({
    method: 'post',
    url: 'https://australiaeast.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment',
    data: {
      documents: [
        {
          id: result.id,
          text: result.phrase,
        },
      ],
    },
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': this.key,
    },
  }).then(function (response) {
    var result = response.data.documents[0];
    this.receiver.receiveSentiment(result);
  }.bind(this)).catch(function (error) {
    this.receiver.updateStatus('Something went wrong', ERROR);
  }.bind(this));
};
