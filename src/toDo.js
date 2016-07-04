function toDo() {
  this._list = [];
}

  toDo.prototype = {
    list: function() {
        return this._list;
    },
    complete: function() {
      return true;
    },
    add: function(todo) {
      this._list.push(todo);
    }
  };

  



// needed to export the constructor for testing //
module.exports = toDo;
