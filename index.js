'use strict';

var nbt = require('nbt');
var fs = require('fs');
var ItemPile = require('itempile');

var id2name = {
  // TODO
  default: 'gravel'
};

var data = fs.readFileSync('test.dat');
//var data = fs.readFileSync('../nbt-js/sample/bigtest.nbt');
nbt.parse(data, function(err, result) {
  console.log(JSON.stringify(result,null, '  '));

  if (result.Inventory) {
    for (var i = 0; i < result.Inventory.length; i += 1) {
      console.log(i, result.Inventory[i]);

      var name = id2name[result.Inventory[i].id] || id2name.default;
      var count = +result.Inventory[i].Count;
      var pile = new ItemPile(name, count);

      console.log(pile);
    }
  }
});
