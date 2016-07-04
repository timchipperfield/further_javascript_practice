var expect = require('chai').expect;
var toDo = require('../src/toDo');


describe('To do List', function() {

  var todo;
  beforeEach(function() {
      todo = new toDo();
    });
  it('list includes Eat Breakfast', function() {
    todo.add('eatBreakfast');
    expect(todo.list().pop()).to.equal('eatBreakfast');
    });

  it('returns a boolean when complete is called', function() {
    expect(todo.complete()).to.be.a('boolean');
  });

});
