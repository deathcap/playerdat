'use strict';

var nbt = require('nbt');
var fs = require('fs');
var ItemPile = require('itempile');
var Inventory = require('inventory');

var id2name = {
  // TODO
  default: 'gravel',

  1: 'stone',
  2: 'cobblestone',
  3: 'dirt',
  4: 'grass',

  257: 'pickaxeIron',

  263: 'coal',

  265: 'ingotIron',

  270: 'pickaxeWood',
  274: 'pickaxeStone',

  280: 'stick',
};

var data = fs.readFileSync('basic.dat');
//var data = fs.readFileSync('../nbt-js/sample/bigtest.nbt');
nbt.parse(data, function(err, result) {
  console.log(JSON.stringify(result,null, '  '));

  if (result.Inventory) {

    var inventory = new Inventory(result.Inventory.length);

    for (var i = 0; i < result.Inventory.length; i += 1) {
      //console.log(i, result.Inventory[i]);

      var name = id2name[result.Inventory[i].id] || id2name.default;
      var count = +result.Inventory[i].Count;
      var slot = +result.Inventory[i].Slot;
      var pile = new ItemPile(name, count);

      //console.log(pile);
      inventory.set(slot, pile);
    }
    console.log(inventory);
  }
});
