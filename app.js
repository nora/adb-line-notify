/*! 
 * Dasher
 * Copyright 2015 Jon Maddox 
 * Licensed under MIT (https://github.com/maddox/dasher/blob/master/LICENSE) 
 */
 
var DasherButton = require('./lib/dasher')
var config = require('./config/config')

var buttons = []

for (var i = 0; i < config.buttons.length; i++) {
  button = config.buttons[i]
  buttons.push(new DasherButton(button))
}
