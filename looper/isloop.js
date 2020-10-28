'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let tortoise = linkedlist.head;
  let hare = linkedlist.head;

  while (tortoise && tortoise.next) {
    hare = hare.next;
    tortoise = tortoise.next.next;

    if (tortoise === hare) {
      return true;
    }
  }
  return false;
  //console.log(currNode.value > nextNode.value);
  //console.log(currNode, nextNode);
};




/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
