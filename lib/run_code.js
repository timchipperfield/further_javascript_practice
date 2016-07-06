var List = require('../lib/models/list.js');
var Task = require('../lib/models/task.js');

var new_list = new List();
var task1 = new Task("eat bacon");
var task2 = new Task("feed the hog");
var task3 = new Task("eat more bacon");
new_list.addItem(task1);
new_list.addItem(task2);
new_list.addItem(task3);

console.log(new_list.items());
console.log(new_list.toHtml());
