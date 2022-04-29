const PageModel = require('./models/page-model')

async function load () {
  const pageModel = new PageModel({ baseUrl: 'https://www.google.com' })
  const result = await pageModel.get('/')
  return result
} // load

load().then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)
})
