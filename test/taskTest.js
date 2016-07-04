var assert = require('chai').assert;
var expect = require('chai').expect;
var Task = require('../lib/task.js');

describe('Task', function() {
  var task = new Task('phone grandma');

  it('should store a task when constructed', function() {
    expect(task.get()).to.equal('phone grandma');
  });
});
