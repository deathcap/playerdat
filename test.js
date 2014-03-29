'use strict';

var fs = require('fs');
var loadInventory = require('./').loadInventory;
var test = require('tape');

test('basic', function(t) {
  loadInventory(fs.readFileSync('basic.dat'), function(inventory) {
    console.log(inventory);

    t.equal(inventory.width, 9);
    t.equal(inventory.height, 1);

    t.equal(inventory.get(0).toString(), '1:pickaxeWood');
    t.equal(inventory.get(1).toString(), '1:pickaxeStone');
    t.equal(inventory.get(2).toString(), '1:pickaxeIron');
    t.equal(inventory.get(3).toString(), '1:coal');
    t.equal(inventory.get(4).toString(), '1:ingotIron');
    t.equal(inventory.get(5).toString(), '1:stick');
    t.equal(inventory.get(6).toString(), '1:dirt');
    t.equal(inventory.get(7).toString(), '1:grass');
    t.equal(inventory.get(8).toString(), '1:cobblestone');

    t.end();
  });
});

/*
loadInventory(fs.readFileSync('test.dat'), function(inventory) {
  console.log(inventory);
});
*/
