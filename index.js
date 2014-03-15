'use strict';

var nbt = require('nbt');
var fs = require('fs');

fs.readFile('test.dat', function(err, data) {
//fs.readFile('../nbt-js/sample/bigtest.nbt', function(err, data) {
  if (err) throw err;

  nbt.parse(data, function(err, result) {
    console.log(JSON.stringify(result,null, '  '));
  });
});
