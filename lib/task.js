var Task = function(task) {
  this._task = task;
};

Task.prototype.get = function() {
  return this._task;
};

module.exports = Task;
