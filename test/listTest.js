var expect = require('chai').expect;
var List = require('../lib/list.js');
var Task = require('../lib/task.js');

describe('List', function() {
  var list;

  beforeEach(function() {
    list = new List();
  });

  it('stores a new task', function() {
    var callGrandma = new Task('call grandma');
    list.addItem(callGrandma);
    expect(list.items().pop()).to.eq(callGrandma);
  });
});
