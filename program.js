var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({
  transformViews: false
}));

require('babel/register')({
  ignore: false
});

app.use('/', function(req, res) {
  res.render('index', '');
});

app.listen(app.get('port'), function() {});

//this code creates a small express server that renders
//the React components.

//if you navigate to '/', views/index.jsx will be rendered.
//this program uses express-react-views module