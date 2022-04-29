const chai = require('chai')
chai.use(require('chai-as-promised'))
chai.use(require('sinon-chai'))
const expect = chai.expect
const sinon = require('sinon')
const axios = require('axios').default
const PageModel = require('../../src/models/page-model')

describe('PageModel', () => {
  let axiosStub, axiosInstanceMock, pageModel
  beforeEach(() => {
    axiosInstanceMock = {
      get: sinon.fake.resolves({
        data: 'I am a web page'
      })
    }
    axiosStub = {
      create: sinon.stub(axios, 'create').returns(axiosInstanceMock)
    }
    pageModel = new PageModel({ baseUrl: 'http://localhost' })
  }) // beforeEach
  afterEach(() => {
    sinon.restore()
  }) // afterEach
  describe('constructor', () => {
    it('should save the baseURL', () => {
      expect(pageModel.baseUrl).to.equal('http://localhost')
      expect(axiosStub.create).to.have.been.calledOnce
      expect(axiosStub.create.lastCall.args).to.deep.equal([
        { baseURL: 'http://localhost', timeout: 5000 }
      ])
    })
  }) // constructor
  describe('get', () => {
    it('should load the url provided', async () => {
      const pageData = await pageModel.get('/')
      expect(pageData).to.equal('I am a web page')
      expect(axiosInstanceMock.get).to.have.been.calledOnce
      expect(axiosInstanceMock.get.lastCall.args).to.deep.equal(['/'])
    })
  }) // get
}) // PageModel