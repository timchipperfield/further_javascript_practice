var app = require("http-server").createServer();
var assert = require('assert');
var Browser = require('zombie');
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
});
