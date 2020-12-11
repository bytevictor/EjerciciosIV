
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