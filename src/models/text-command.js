const COMMAND_SEPARATOR_RX = /(\d*r.|\d*h|\d*l)/gm
const COMMAND_PARSER_RX = /(\d*)(r.|h|l)/
class TextCommand {
  constructor (str) {
    this.str = str
  }

  parseCommands() {
    const result = this.str.match(COMMAND_SEPARATOR_RX).map((item) => {
      const command = item.match(COMMAND_PARSER_RX)
      // first item has number if any
      // second item has the command, and if it is r then the next char is
      // the one to be replaced
      return {
        count: Number(command[1] || 1),
        command: command[2].charAt(0),
        char: command[2].charAt(0) === 'r' ? command[2].charAt(1) : undefined
      }
    })
    return result
  }
} // MoveableStr

module.exports = TextCommand
