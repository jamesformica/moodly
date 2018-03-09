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
  '#89ff00'
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
  '#3c3173'
];

var neutralColours = [
  '#f9dc90',
  '#f89e9d',
  '#d46f93',
  '#afdfea',
  '#a9bfbe',
  '#708c90'
];

var theGreys = [
  'grey',
  'darkgrey',
  'lightgrey',
  'slategrey',
  'darkslategrey'
];

function getMoodColour(mood, keywords) {
  if (window.startMoodOnlyGreys) {
    return getRandomColour(theGreys);
  }

  var matchColour = matchKeywords(keywords);
  if (matchColour) return matchColour;

  switch(mood) {
    case SAD:
      return getRandomColour(sadColours);
    case NEUTRAL:
      return getRandomColour(neutralColours);
    case HAPPY:
      return getRandomColour(happyColours);
  }
}

function matchKeywords(keywords) {
  if (!keywords) return null;

  for (var i = 0; i < keywords.length; i++) {
    var word = keywords[i].toLowerCase();
    if (word === 'love') return 'crimson';
    if (word === 'death') return 'black';
    if (word === 'jealous' || word === 'envy') return 'green';
    if (word === 'angry') return 'darkred';
  }
  return null;
}

function getRandomColour(colours) {
  var num = Math.floor(Math.random() * colours.length);
  return colours[num];
}
