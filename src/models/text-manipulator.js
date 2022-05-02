class TextManipulator {
  constructor (str) {
    this.str = str
    this.cursor = 0
  }

  h (count) {
    this.cursor = this.cursor - (count || 1)
    if (this.cursor < 0) {
      this.cursor = 0
    }
    return this
  } // h

  l (count) {
    this.cursor = this.cursor + (count || 1)
    if (this.cursor >= this.str.length) {
      this.cursor = this.str.length - 1
    }
    if (this.cursor < 0) {
      this.cursor = 0
    }
    return this
  } // l

  x (count) {
    count = count || 1
    this.str = this.str.slice(0, this.cursor).concat(this.str.slice(this.cursor + count))
    if (this.cursor  > (this.str.length - 1) && (this.str.length - 1) >= 0) {
      this.cursor = this.str.length - 1
    }
    return this
  } // x

  replaceCurrentChar (newChar) {
    this.str = this.str.slice(0, this.cursor).concat(newChar).concat(this.str.slice(this.cursor + 1))
    return this
  } // replaceCurrentChar

  r (...args) {
    const char = args.length === 2 ? args[1] : args[0]
    const count = args.length === 2 ? args[0] : 1
    this.replaceCurrentChar(char)
    let index
    for (index = 1; index < count; index++) {
      this.l()
      this.replaceCurrentChar(char)
    }
    return this
  } // r

  get currentChar() {
    return this.str[this.cursor]
  }
} // TextManipulator

module.exports = TextManipulator
