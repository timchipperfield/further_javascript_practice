// var Task = require('../../lib/models/task.js');
// var mustache = require('mustache');

(function(exports) {

function List() {
  this._list = [];
}

List.prototype.addItem = function(item) {
  this._list.push(item);
};

List.prototype.items = function() {
  return this._list;
};

List.prototype._toJson = function() {
  var jsonified = JSON.stringify({"tasks": this._list});
  return jsonified;
};

List.prototype.toHtml = function() {
  var formattedList = [];
  for(i=0; i < this._list.length; i++) {
    formattedList.push("<li id='list_"+i+"'>" + this._list[i]._task + "</li>");
  }
  return ("<ul>" + formattedList.join('') + "</ul>");
};

exports.List = List;
})(this);
