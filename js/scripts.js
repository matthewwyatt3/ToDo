// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("delete");
//   span.className = "delete";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }
//
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("complete");
//   span.className = "complete";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }



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

  var span = document.createElement("BUTTON");
  var txt = document.createTextNode("");
  span.className = "delete fas fa-times-circle";
  span.appendChild(txt);
  li.appendChild(span);

  var span = document.createElement("BUTTON");
  var txt = document.createTextNode("");
  span.className = "complete fas fa-check-square";
  span.appendChild(txt);
  li.appendChild(span);

  var span = document.createElement("BUTTON");
  var txt = document.createTextNode("");
  span.className = "edit fas fa-pencil-alt";
  span.appendChild(txt);
  li.appendChild(span);

  for ( i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

var close = document.getElementsByClassName("delete");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var complete = document.getElementsByClassName("complete");
var i;
for (i = 0; i < close.length; i++) {
  complete[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
  document.getElementById("done").appendChild(li);
}
