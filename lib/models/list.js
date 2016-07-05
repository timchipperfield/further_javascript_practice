var Task = require('../../lib/models/task.js');

function List() {
  this._list = [];
}

List.prototype.addItem = function(item) {
  this._list.push(item);
};

List.prototype.items = function() {
  return this._list;
};

module.exports = List;
