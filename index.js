var express = require('express');
var app = express();

app.set('port', (process.env.PORT));

app.use(express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.sendFile('index.html', {
     root: __dirname
   });
});

app.get('*', function(req, res){
  res.redirect('/');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
