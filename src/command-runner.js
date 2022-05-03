// command-runner
const TextCommand = require('./text-command')
const TextManipulator = require('./text-manipulator')
const commandRunner = (text, command) => {
  const textCommand = new TextCommand(command)
  const textManipulator = new TextManipulator(text)
  for (const item of textCommand.parseCommands()) {
    textManipulator[item.command](item.count, item.char)
  }
  return {
    text: textManipulator.str,
    cursor: textManipulator.cursor
  }
} // commandRunner
module.exports = commandRunner