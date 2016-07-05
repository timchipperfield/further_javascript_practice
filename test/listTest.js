var expect = require('chai').expect;
var sinon = require('sinon');
var List = require('../lib/models/list.js');
var Task = require('../lib/models/task.js');

describe('List', function() {
  var list;

  beforeEach(function() {
    list = new List();
  });

  it('stores a new task', function() {
    var callGrandma = sinon.mock(Task);
    list.addItem(callGrandma);
    expect(list.items().pop()).to.eq(callGrandma);
  });
});
