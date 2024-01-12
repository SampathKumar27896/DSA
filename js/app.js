const LinkedList = require('./linked-list.js');

const list = new LinkedList();
list.addNodesAtEnd([1, 2, 3, 4, 5]);
list.printList();

let temp = list.getHead();
let prev = null;
let front = null;
while(temp !== null) {
    front = temp.next;
    temp.next = prev;
    prev = temp;
    temp = front;
}

list.printList();

