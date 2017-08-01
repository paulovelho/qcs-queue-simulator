# AGERTEK
## QCS queue simulator

Simulating business rules for queue system.

### demo:
http://projetos.platypusweb.com.br/agertek/qcs/#

---
### how it works?

#### to add a new element:
- if it's a common one (type `a`), just adds to the end of the queue.
- if it's a special element (types `b` or `c`), it is added after x consecutives `a` elements (after 2 `a` elements in case of `b` and `1` in case of `c`)

#### code sample:
```
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
```

- For special elements:
I check whenever I have x consecutive `a` elements. If I do, I check the next in queue - if it's also an `a`, I add the new element there.



