const chai = require('chai')
const expect = chai.expect
const commandRunner = require('../src/command-runner')

describe('commandRunner', () => {
  describe('movmement and replace commands', () => {
    it('l -> Hello World 1', () => {
      expect(commandRunner('Hello World', 'l')).to.deep.equal({
        text: 'Hello World',
        cursor: 1
      })
    })
    it('hhlhllhlhhll -> Hello World 2', () => {
      expect(commandRunner('Hello World', 'hhlhllhlhhll')).to.deep.equal({
        text: 'Hello World',
        cursor: 2
      })
    })
    it('rhllllllrw -> Hello World 6', () => {
      expect(commandRunner('Hello World', 'rhllllllrw')).to.deep.equal({
        text: 'hello world',
        cursor: 6
      })
    })
  }) // movement and replace commands
  describe('commands with count parameters', () => {
    it('rh6l9l4hrw -> hello world 6', () => {
      expect(commandRunner('Hello World', 'rh6l9l4hrw')).to.deep.equal({
        text: 'hello world',
        cursor: 6
      })
    })
    it('9lrL7h2rL -> HeLLo WorLd 6', () => {
      expect(commandRunner('Hello World', '9lrL7h2rL')).to.deep.equal({
        text: 'HeLLo WorLd',
        cursor: 3
      })
    })
    it('9lrL7h2rL -> HeLLo WorLd 6', () => {
      expect(commandRunner('Hello World', '9lrL7h2rL')).to.deep.equal({
        text: 'HeLLo WorLd',
        cursor: 3
      })
    })
    it('999999999999999999999999999lr0 -> Hello Worl0 10', () => {
      expect(commandRunner('Hello World', '999999999999999999999999999lr0')).to.deep.equal({
        text: 'Hello Worl0',
        cursor: 10
      })
    })
    it('999rs -> sssssssssss 10', () => {
      expect(commandRunner('Hello World', '999rs')).to.deep.equal({
        text: 'sssssssssss',
        cursor: 10
      })
    })
    it('fWrw10hrhf x -> helloworld 5', () => {
      expect(commandRunner('Hello World', 'fWrw10hrhf x')).to.deep.equal({
        text: 'helloworld',
        cursor: 5
      })
    })
  }) // commands with count parameters
}) // commandRunner
