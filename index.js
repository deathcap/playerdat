'use strict';

var nbt = require('nbt');
var ItemPile = require('itempile');
var Inventory = require('inventory');

// translate MC numerical ID to names used by some common voxel.js plugins
// see http://minecraft-ids.grahamedgecombe.com/
var id2name = {
  0: 'air',
  1: 'stone',
  2: 'grass',
  3: 'dirt',
  4: 'cobblestone',
  5: 'plankOak',

  8: 'waterFlow',
  9: 'waterSource',
  10: 'lavaFlow',
  11: 'lavaSource',

  14: 'oreGold',
  15: 'oreIron',
  16: 'oreCoal',
  17: 'logOak',
  18: 'leavesOak',

  20: 'glass',

  35: 'woolWhite', // TODO: colors

  41: 'blockGold',
  42: 'blockIron',

  54: 'chest',

  58: 'workbench',

  61: 'furnace',

  86: 'pumpkin',

  98: 'stoneBrick', // TODO: mossy, cracked, chiseled


  256: 'spadeIron',
  257: 'pickaxeIron',
  258: 'axeIron',
  259: 'lighter',
  260: 'apple',

  263: 'coal',

  265: 'ingotIron',
  266: 'ingotGold',

  270: 'pickaxeWood',
  271: 'axeWood',

  273: 'spadeStone',
  274: 'pickaxeStone',
  275: 'axeStone',

  297: 'bread',

  280: 'stick',

  325: 'bucket',
  326: 'bucketWater',
  327: 'bucketLava',

  357: 'cookie',

  359: 'shears',

  375: 'spiderEye',
};

var loadInventory = function(data, cb) {
  if (data instanceof ArrayBuffer) data = new Buffer(new Uint8Array(data));

  nbt.parse(data, function(err, result) {
    //console.log(JSON.stringify(result,null, '  '));

    if (result.Inventory) {
      var inventory = new Inventory(result.Inventory.length);

      for (var i = 0; i < result.Inventory.length; i += 1) {
        //console.log(i, result.Inventory[i]);

        var name = id2name[result.Inventory[i].id] || 'unknown-' + result.Inventory[i].id;
        var count = +result.Inventory[i].Count;
        var slot = +result.Inventory[i].Slot;
        var pile = new ItemPile(name, count);

        //console.log(pile);
        inventory.set(slot, pile);
      }
      //console.log(inventory);
      cb(inventory, data);
    } else {
      cb(undefined, data);
    }
  });
};

module.exports = {
  loadInventory: loadInventory
};

