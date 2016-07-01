var parse = require('csv-parse');
var fs = require('fs');

var data = fs.readFileSync('sample.csv', {encoding: 'utf8'});

parse(data, {}, function(err, data) {
  console.log('err', err, 'data', data);
});
