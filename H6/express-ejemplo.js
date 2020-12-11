var express = require('express');
var app = express();

var ejemplos = [];

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.put('/ejemplo/:clave/:valor',
    function( req, response ) {

        var clave = req.params.clave
        var valor = req.params.valor

        console.log("clave: " + clave + "   valor: ", valor)

        ejemplos.push({clave, valor});

        response.send({clave, valor})
});

app.get('/ejemplo', function(request, response) {
response.send( JSON.stringify(ejemplos) );
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});