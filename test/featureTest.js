var Browser = require('zombie');
var createServer = require('http-server').createServer;
var path = require('path');
var server = createServer({root: path.join(__dirname, "../")});

server.listen(3000);
Browser.localhost('localhost
', 3000);

describe('user visits page', function() {
  var browser = new Browser();

  it('should have a title', function() {
    browser.assert.text('title', 'To Do List');
  });
});
