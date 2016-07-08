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
        var button = '<input id="submit" type="submit" onclick="complete('+i+')" value="complete">';
        var htmlTag = "<li class="+this._list[i].status()+" id='list_"+i+"'>";
        formattedList.push( htmlTag + this._list[i]._task + '&nbsp;' + button +"</li>");
      }
      return ("<ul>" + formattedList.join('') + "</ul>");
    }
  }
  exports.List = List;
})(this);
