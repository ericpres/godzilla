const chai = require('chai')
chai.use(require('chai-as-promised'))
chai.use(require('sinon-chai'))
const expect = chai.expect
const TextManipulator = require('../../src/models/text-manipulator')

describe('TextManipulator', () => {
  let textMaipulator
  beforeEach(() => {
    textMaipulator = new TextManipulator('Hello World')
  })
  describe('constructor', () => {
    it('constructor', () => {
      expect(textMaipulator).to.deep.equal({
        str: 'Hello World',
        cursor: 0
      })
    })
  })
  describe('h', () => {
    it('should move the cursor left 1', () => {
      expect(textMaipulator.h().cursor).to.equal(0)
      expect(textMaipulator.currentChar).to.equal('H')
    })
    it('should move the cursor 3 spots', () => {
      textMaipulator.cursor = 5
      expect(textMaipulator.h(3).cursor).to.equal(2)
    })
  }) // h
  describe('l', () => {
    it('should move the cursor right 1', () => {
      expect(textMaipulator.l().cursor).to.equal(1)
      expect(textMaipulator.currentChar).to.equal('e')
    })
    it('should move the cursor 3 places', () => {
      expect(textMaipulator.l().l().l().cursor).to.equal(3)
      expect(textMaipulator.currentChar).to.equal('l')
    })
    it('should move the cursor 4 places', () => {
      expect(textMaipulator.l(4).cursor).to.equal(4)
      expect(textMaipulator.currentChar).to.equal('o')
    })
    it('move past the end of string', () => {
      expect(textMaipulator.l(30).currentChar).to.equal('d')
    })
    it('should handle an empty string', () => {
      const emptyText = new TextManipulator('')
      expect(emptyText.l().cursor).to.equal(0)
    })
  }) // l
  describe('r', () => {
    it('should replace the current char', () => {
      expect(textMaipulator.r('h').str).to.equal('hello World')
    })
    it('should have the same effect if we pass undefined as the count', () => {
      expect(textMaipulator.r(undefined, 'h').str).to.equal('hello World')
    })
    it('should repalce current char', () => {
      expect(textMaipulator.l(7).r('Z').str).to.equal('Hello WZrld')
    })
    it('should replace multiple chars', () => {
      expect(textMaipulator.r(2, 'E').str).to.equal('EEllo World')
    })
  }) // r
  describe('x', () => {
    it('should delete the H and leave the cursor at 0', () => {
      expect(textMaipulator.x()).to.deep.equal({
        str: 'ello World',
        cursor: 0
      })
    })
    it('should delete the He and leave the cursor at 0', () => {
      expect(textMaipulator.x(2)).to.deep.equal({
        str: 'llo World',
        cursor: 0
      })
    })
    it('should delete the Hel and leave the cursor at 0', () => {
      expect(textMaipulator.x(3)).to.deep.equal({
        str: 'lo World',
        cursor: 0
      })
    })
    it('should delete the last character and move the cursor back 1', () => {
      expect(textMaipulator.l(999).x()).to.deep.equal({
        str: 'Hello Worl',
        cursor: 9
      })
    })
    it('should delete the last character and move the cursor back 1', () => {
      expect(textMaipulator.l(999).x(5)).to.deep.equal({
        str: 'Hello Worl',
        cursor: 9
      })
    })
    it('should delete the only character in the string', () => {
      const shortString = new TextManipulator('H')
      expect(shortString.x()).to.deep.equal({
        str: '',
        cursor: 0
      })
    })
    it('should handle an empty string', () => {
      const emptyString = new TextManipulator('')
      expect(emptyString.x()).to.deep.equal({
        str: '',
        cursor: 0
      })
    })
    it('should delete all characters in the string', () => {
      expect(textMaipulator.x(20)).to.deep.equal({
        str: '',
        cursor: 0
      })
    })
    it('should only leave 1 character', () => {
      expect(textMaipulator.l().x(20)).to.deep.equal({
        str: 'H',
        cursor: 0
      })
    })
  }) // x
})
