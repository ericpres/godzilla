const axios = require('axios').default

const DEFAULT_TIMEOUT = 5000

class PageModel {
  constructor ({ baseUrl }) {
    Object.assign(this, { baseUrl })
    this.ai = axios.create({
      baseURL: this.baseUrl,
      timeout: DEFAULT_TIMEOUT
    })
  }

  async get (url) {
    const result = await this.ai.get(url)
    return result.data
  } // get
} // PageModel

module.exports = PageModel
