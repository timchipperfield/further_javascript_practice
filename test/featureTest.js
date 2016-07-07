var app = require("http-server").createServer();
var assert = require('assert').assert;
var Browser = require('zombie');
var List = require('../lib/models/list.js').List;
var Task = require('../lib/models/task.js').Task;

describe('title page', function() {
  before(function() {
    server = app.listen(3000);
    browser = new Browser({ site: 'http://localhost:3000' });
  });
  beforeEach(function(done) {
    browser.visit('/', done);
  });

  it('is findable', function() {
    browser.assert.status(200);
  });

  it('displays a title', function() {
    browser.assert.text('h1', 'To Do List');
  });

  it('contains some todos', function() {
    var list = new List();
    var task = new Task('call grandma');
    list.addItem(task);
    browser.assert.text('li', 'call grandma');
  });
});
