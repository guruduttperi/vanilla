const patternDict = [{
  pattern: '\\b(?<greeting> Hi|Hello|Hey|Namaste)\\b',
  intent: 'Hello'
},
{
  pattern: '\\b(Bye|Exit|Kill)\\b',
  intent: 'Exit'
},
{
  pattern: 'like\\sin\\s\\b(?<city>.+)',
  intent: 'CurrentWeather'
}
];

module.exports = patternDict;
