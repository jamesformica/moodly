var happyColours = [
  'yellow',
  'orange',
  'pink',
  'cyan',
  'magenta',
  'crimson'
];

var sadColours = [
  'grey',
  'darkblue',
  'navy',
  'purple',
  'brown',
  'crimson'
];

var neutralColours = [
  'lightgrey',
  'green',
  'turquoise'
];

var theGreys = [
  'grey',
  'darkgrey',
  'lightgrey',
  'slategrey',
  'darkslategrey'
]

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
