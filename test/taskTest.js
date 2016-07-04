var assert = require('chai').assert;
var expect = require('chai').expect;
var Task = require('../lib/task.js');
console.log(Task);

describe('Task', function() {
  // var task;
  // beforeEach(function() {
  //   var task = new Task('phone grandma');
  // });
  it('should store a task when constructed', function() {
    var task = new Task('phone grandma');
    console.log(task._task);
    console.log(task.get());
    expect(task.get()).to.equal('phone grandma');
  });
});
