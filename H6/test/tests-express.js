
var request = require('supertest'),
app = require('../express-ejemplo.js');

describe( "PUT ejemplo", function() {
    it('Deberia crear una entrada json', function (done) {
      request(app)
       .put('/ejemplo/ejemplo1/valorejemplo')
       .expect('Content-Type', /json/)
       .expect(200,done);
    });
});

describe( "GET ejemplo", function() {
  it('Deberia devolver las entradas antes introducidas', function (done) {
    request(app)
     .get('/ejemplo')
     .expect('Content-Type', /json/)
     .expect(200,done);
  });
});