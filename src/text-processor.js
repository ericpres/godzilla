const TextManipulator = require('./models/text-manipulator')

let command = 'rh6l9l4hrw'

const textManipulator = new TextManipulator('Hello World')

function commandSign
do {
  const char = command.charAt(0)
  if (char === 'h') {
    textManipulator.moveCursor(-1)
  } else if (char === 'l') {
    textManipulator.moveCursor(1)
  } else if (char === 'r') {
    textManipulator.replace(command[1])
    command = command.slice(1)
  } else if (command.match(/\d+/)) {
    const num = command.match(/\d+/)
    
  }
  command = command.slice(1)
} while (command)

console.log(textManipulator.str)
console.log(textManipulator.cursor)