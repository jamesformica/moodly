var happyColours = [
  '#ffb3ba',
  '#ffdfba',
  '#ffffba',
  '#baffc9',
  '#bae1ff',
  '#eecbff',
  '#e5dfef',
  '#fbdce0',
  '#cbefe7',
  '#fffdce',
  '#d7ffdd',
  '#f7ff7a',
  '#50bdff',
  '#e300ff',
  '#00ffec',
];

var sadColours = [
  '#567b89',
  '#39546d',
  '#283f54',
  '#13273e',
  '#b30838',
  '#637a8a',
  '#162340',
  '#05383b',
  '#00282b',
  '#00171a',
  '#230c22',
  '#3a183f',
  '#522a64',
  '#3c3173',
];

var neutralColours = [
  '#f9dc90',
  '#f89e9d',
  '#d46f93',
  '#afdfea',
  '#a9bfbe',
  '#708c90',
];

var theGreys = [
  'grey',
  'darkgrey',
  'lightgrey',
  'slategrey',
  'darkslategrey',
];

var Colours = {
  getMoodColour: function (mood, keywords) {
    if (window.startMoodOnlyGreys) {
      return this.getRandomColour(theGreys);
    }

    switch (mood) {
      case SAD:
        return this.getRandomColour(sadColours);
      case NEUTRAL:
        return this.getRandomColour(neutralColours);
      case HAPPY:
        return this.getRandomColour(happyColours);
    }
  },

  getRandomColour: function (colours) {
    var num = Math.floor(Math.random() * colours.length);
    return colours[num];
  },
};
