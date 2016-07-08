(function(exports) {
  function List(Task) {
    this.task = Task;
    this._list = [];
  }

  List.prototype = {
    addItem : function(item) {
      this._list.push(new this.task(item));
    },
    items : function() {
      return this._list;
    },
    _toJson : function() {
      var jsonified = JSON.stringify({"tasks": this._list});
      return jsonified;
    },
    toHtml : function() {
      var formattedList = [];
      for(i=0; i < this._list.length; i++) {
        var button = '<input id="submit" type="submit" onclick="complete('+i+')" value="complete">'
        formattedList.push("<li class="+this._list[i].status()+" id='list_"+i+"'>" + this._list[i]._task + button +"</li>");
        // console.log(this._list[i].status());
      }
      return ("<ul>" + formattedList.join('') + "</ul>");
    }
  }
  exports.List = List;
})(this);
