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

  // f(<char>) - one parameter means find the next occurce of the character
  // f(<count>, <char>)
  f (...args) {
    const char = args.length === 2 ? args[1] : args[0]
    let count = args.length === 2 ? args[0] : 1
    let newCursor
    do {
      newCursor = this.str.indexOf(char, this.cursor + 1)
      if (newCursor >= 0) {
        this.cursor = newCursor
      }
      count = count - 1
    } while (newCursor >= 0 && count > 0)
    return this
  } // f
  get currentChar() {
    return this.str[this.cursor]
  }
} // TextManipulator

module.exports = TextManipulator
