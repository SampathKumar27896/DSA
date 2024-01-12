const LinkedList = require('./linked-list.js');
//Program to delete the tail of the linked list
const list = new LinkedList([1, 2, 34, 56, 66, 67]);
list.printList();
const newNode = list.addNodeBeforeKthElementValue(null, 100, list.getHead());
console.log("New Node: ", JSON.stringify(newNode));
list.setHead(newNode);
list.printList();