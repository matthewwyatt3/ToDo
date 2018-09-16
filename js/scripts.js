var openTasks = document.getElementsByTagName("LI");
var i;
for (i = o; i < openTasks.length; i++) {
  var span = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  span.className = "close"
  span.appendChild(txt);
  openTasks[i].appendChild(span);
}



function newTask() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("taskInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must enter a task!!!");
  } else {
    document.getElementById("toDo").appendChild(li);
  }
  document.getElementById("taskInput").value = "";

  for ( i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
