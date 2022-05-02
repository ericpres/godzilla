const chai = require('chai')
chai.use(require('chai-as-promised'))
chai.use(require('sinon-chai'))
const expect = chai.expect
const TextCommand = require('../../src/models/text-command')

describe('TextCommand', () => {
  describe('parseCommands', () => {
    it('hhlhllhlhhll', () => {
      const textCommand = new TextCommand('hhlhllhlhhll')
      expect(textCommand.parseCommands()).to.deep.equal([
        { command: 'h', count: 1, char: undefined },
        { command: 'h', count: 1, char: undefined },
        { command: 'l', count: 1, char: undefined },
        { command: 'h', count: 1, char: undefined },
        { command: 'l', count: 1, char: undefined },
        { command: 'l', count: 1, char: undefined },
        { command: 'h', count: 1, char: undefined },
        { command: 'l', count: 1, char: undefined },
        { command: 'h', count: 1, char: undefined },
        { command: 'h', count: 1, char: undefined },
        { command: 'l', count: 1, char: undefined },
        { command: 'l', count: 1, char: undefined }
      ])
    })
    it('rhllllllrw', () => {
      const textCommand = new TextCommand('rhllllllrw')
      expect(textCommand.parseCommands()).to.deep.equal([
        { command: 'r', count: 1, char: 'h' },
        { command: 'l', count: 1, char: undefined },
        { command: 'l', count: 1, char: undefined },
        { command: 'l', count: 1, char: undefined },
        { command: 'l', count: 1, char: undefined },
        { command: 'l', count: 1, char: undefined },
        { command: 'l', count: 1, char: undefined },
        { command: 'r', count: 1, char: 'w' }
      ])
    })
    it('rh6l9l4hrw', () => {
      const textCommand = new TextCommand('rh6l9l4hrw')
      expect(textCommand.parseCommands()).to.deep.equal([
        { command: 'r', count: 1, char: 'h' },
        { command: 'l', count: 6, char: undefined },
        { command: 'l', count: 9, char: undefined },
        { command: 'h', count: 4, char: undefined },
        { command: 'r', count: 1, char: 'w' }
      ])
    })
    it('9lrL7h2rL', () => {
      const textCommand = new TextCommand('9lrL7h2rL')
      expect(textCommand.parseCommands()).to.deep.equal([
        { command: 'l', count: 9, char: undefined},
        { command: 'r', count: 1, char: 'L' },
        { command: 'h', count: 7, char: undefined },
        { command: 'r', count: 2, char: 'L' }
      ])
    })
    it('999999999999999999999999999lr0', () => {
      const textCommand = new TextCommand('999999999999999999999999999lr0')
      expect(textCommand.parseCommands()).to.deep.equal([
        // eslint-disable-next-line no-loss-of-precision
        { command: 'l', count: 999999999999999999999999999, char: undefined},
        { command: 'r', count: 1, char: '0' }
      ])
    })
    it('999rs', () => {
      const textCommand = new TextCommand('999rs')
      expect(textCommand.parseCommands()).to.deep.equal([
        { command: 'r', count: 999, char: 's'}
      ])
    })
  }) // parseCommands
}) // TextCommand
