// var myNodelist = document.getElementsByTagName("LI");
// // var i;
// // for (i = 0; i < myNodelist.length; i++) {
// //   var span = document.createElement("SPAN");
// //   var txt = document.createTextNode("delete");
// //   span.className = "delete";
// //   span.appendChild(txt);
// //   myNodelist[i].appendChild(span);
// // }
// //
// // var myNodelist = document.getElementsByTagName("LI");
// // var i;
// // for (i = 0; i < myNodelist.length; i++) {
// //   var span = document.createElement("SPAN");
// //   var txt = document.createTextNode("complete");
// //   span.className = "complete";
// //   span.appendChild(txt);
// //   myNodelist[i].appendChild(span);
// // }
//
//
// function newTask() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("taskInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must enter a task!!!");
//   } else {
//     document.getElementById("toDo").appendChild(li);
//   }
//   document.getElementById("taskInput").value = "";
//
//
//
//
//   var span = document.createElement("BUTTON");
//   span.className = "delete fas fa-times-circle";
//   li.appendChild(span);
//
//   var span = document.createElement("BUTTON");
//   span.className = "complete fas fa-check-square";
//   li.appendChild(span);
//
//   for ( i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//
//
//     }
//   }
// }
//
// var close = document.getElementsByClassName("delete");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }
//
// // var complete = document.getElementsByClassName("complete");
// // var i;
// // for (i = 0; i < close.length; i++) {
// //   complete[i].onclick = function() {
// //     var div = this.parentElement;
// //     div.style.display = "none";
// //   }
// //   document.getElementById("done").appendChild(li);
// // }
//
// // function complete() {
// // toDo = document.getElementById("toDo");
// //
// // for (var i=0; i < toDo.getElementsByTagName("li").length; i++) {
// //     toDo.getElementsByTagName("li")[i].onclick = function() {
// //         transfer = this.cloneNode(true);
// //         done.appendChild(transfer);
// //         toDo.removeChild(this);
// //         return false;
// //     }
// //
// // }
// //
// //
// // }
//
// dragElement(document.getElementById("mydiv"));
//
// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     /* if present, the header is where you move the DIV from:*/
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     /* otherwise, move the DIV from anywhere inside the DIV:*/
//     elmnt.onmousedown = dragMouseDown;
//   }
//
//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }
//
//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }
//
//   function closeDragElement() {
//     /* stop moving when mouse button is released:*/
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }

// new

// function addTask() {
//   let task = document.getElementById("toDoInput").value;
//   let text = document.createTextNode(task);
//   let newItem = document.createElement("li");
//   newItem.appendChild(text);
//   document.getElementById("new").appendChild(newItem);
//
//   var remove = document.createElement("BUTTON");
//   remove.className = "fas fa-times-circle";
//   newItem.appendChild(remove);
//
//   remove.addEventListener("click", removeTask);
//
//   var finish = document.createElement("BUTTON");
//   finish.className = "fas fa-check-square";
//   newItem.appendChild(finish);
//
//   finish.addEventListener("click", completeTask);
//
//   var edit = document.createElement("button");
//   edit.className = "fas-pencil";
//   newItem.appendChild(edit);
//
// }
//
// function removeTask() {
//   let task = this.parentNode.parentNode;
//   let parent = task.parentNode;
//
//   parent.removeChild(task);
// }
//
// function completeTask() {
//   let item = this.parentNode.parentNode;
//   let parent = done.parentNode;
//   let id = parent.id;
//
//   let target = (id === "new") ? document.getElementById("finished"): document.getElementById("new");
//
//   parent.removeChild(item);
//   target.insertBefore(item, target.childNodes[0]);
//
// }

document.getElementById("add").addEventListener("click", function() {
  let value = document.getElementById("item").value;
  if (value) {
    addItemTodo(value);
    document.getElementById("item").value = "";
  }
});

function removeItem() {
  let item = this.parentNode.parentNode;
  let parent = item.parentNode;

  parent.removeChild(item);
}

function completeItem() {
  let item = this.parentNode.parentNode;
  let parent = item.parentNode;
  let id = parent.id;

  let target = (id === "todo") ? document.getElementById("completed"):document.getElementById("todo");

  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
}

function addItemTodo(text) {
  let list = document.getElementById("todo");

  let item = document.createElement("li");
  item.innerText = text;

  let buttons = document.createElement("div");
  buttons.classList.add("buttons");

  let remove = document.createElement("button");
  remove.classList.add("remove");
  remove.className = "fas fa-times-circle";
  // remove.innerHTML = removeSVG;

  remove.addEventListener("click", removeItem);

  let complete = document.createElement("button");
  complete.classList.add("complete");
  complete.className = "fas fa-check-square";
  // complete.innerHTML = completeSVG;

  complete.addEventListener("click", completeItem);

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0]);
}
