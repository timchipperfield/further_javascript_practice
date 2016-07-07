"use strict";

window.addEventListener("load", function() {
  var new_list = new List();
  // var task1 = new Task("call grandma");
  // new_list.addItem(task1);
  document.getElementById('list').innerHTML = new_list.toHtml();
  document.getElementById("form").addEventListener("submit", myFunction);
  function myFunction(evt) {
     alert("The form was submitted");
     evt.preventDefault();
  }
});


// var task2 = new Task("feed the hog");
// var task3 = new Task("eat more bacon");
// new_list.addItem(task1);
// new_list.addItem(task2);
// new_list.addItem(task3);


// var task_input = document.getElementById('task_input');
// new_list.addItem(task_input);
