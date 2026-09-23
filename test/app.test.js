var request = require('supertest')
var app = require('../app')

describe('GET /', function () {
  it('should return Hello World!', function (done) {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello World!')
      .end(done)
  })
})