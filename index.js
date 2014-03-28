'use strict';

var nbt = require('nbt');
var fs = require('fs');

var data = fs.readFileSync('test.dat');
//var data = fs.readFileSync('../nbt-js/sample/bigtest.nbt');
nbt.parse(data, function(err, result) {
  console.log(JSON.stringify(result,null, '  '));
});
