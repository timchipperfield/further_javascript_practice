(function(exports) {
function Task(task) {
  this._task = task;
  this._status = "incomplete";
};

Task.prototype.get = function() {
  return this._task;
};

Task.prototype.status = function() {
  return this._status;
};

Task.prototype.finish = function() {
  this._status = "completed";
};

exports.Task = Task;
})(this);
