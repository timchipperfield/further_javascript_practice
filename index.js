
window.addEventListener("load", function() {
  new_list = new List(Task);
});

function addTask(){
  var newItem = document.getElementById("task_input").value
  new_list.addItem(newItem);
  // console.log(new_list);
  document.getElementById('list').innerHTML = new_list.toHtml();
};

function complete(i){
  new_list._list[i].finish();
  document.getElementById('list').innerHTML = new_list.toHtml();
};
