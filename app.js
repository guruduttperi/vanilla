'use strict';
//Bring Readline module
const ReadLine = require('readline');
//ReadLine Functionality
const rl = ReadLine.createInterface ({
  //standard I/O
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const matcher = require('./matcher');
const weather = require('./weather');
const {currentWeather} = require('./parser');
//Output Shell
rl.setPrompt('> ');
rl.prompt();
//EventListener
rl.on('line', reply =>{
  //data is a variable used for callback
  matcher(reply,data => {
    switch (data.intent) {
      case 'Hello':
                    console.log(`${data.entities.greeting} to you too!`);
                    rl.prompt();
                    break;

      case 'CurrentWeather':
                    {console.log(`Checking for Weather in ${data.entities.city}...`);
                    //Get Data using Weather API
                    weather(data.entities.city, 'current')
                    .then(response => {
                      let parseResult = currentWeather(response);
                      console.log(parseResult);
                      rl.prompt();
                    })
                    .catch(error => {
                      console.log("Oops. Can't Connect to the Weather Station");
                      rl.prompt();
                    })
                    //rl.prompt();
                    break;
                              }
      case 'Exit':
                    {console.log("Understandable, Have a Great Day!");
                    process.exit();
                    break;
                              }
      default:
                {
                  console.log("Me no speak Espanol");
                  rl.prompt();
                }

    }
  });
});
