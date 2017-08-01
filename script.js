var queue = [];

$(document).ready(function(){
  console.info("loading...");
  startQueue();
});

function startQueue() {
  queue.push("a");
  queue.push("a");
  queue.push("a");
  queue.push("a");
  queue.push("a");
  buildQueue();
}

function newInQueue(el) {
  switch(el) {
    case "b":
      addAfterXAfegaos(el, 2);
      break;
    case "c":
      addAfterXAfegaos(el, 1);
      break;
    case "a":
    default:
      queue.push(el);
  }
  buildQueue();
}

function addAfterXAfegaos(element, afterX) {
  var afgs = 0;
  for (var i = 0; i < queue.length; i++) {
    var type = queue[i];
    if (type == "a") afgs ++;
    else afgs = 0;
    var nextInQueue = queue[i+1];
    if (afgs == afterX){
      if(nextInQueue == "a") break;
    }
  }
  i++;
  console.info("adding "+element+" at position " + i);
  queue.splice(i, 0, element);
}

function neeext() {
  queue.shift();
  buildQueue();
}

function buildQueue() {
  console.info("building queue", queue);
  getQueueContainer().empty();
  for (var i = 0; i < queue.length; i++) {
    var q = queue[i];
    var user = document.createElement("span");
    user.className = "user user-"+q;
    getQueueContainer().append(user);
  }
}

function getQueueContainer() {
  return $(".queue-show");
}