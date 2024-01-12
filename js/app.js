const LinkedList = require('./linked-list.js');
//Program to delete the tail of the linked list
const list = new LinkedList([1, 2, 34, 56, 66, 67]);
list.printList();
const newHead = list.addNodeBeforeKthElement(1, 44, list.getHead());
list.setHead(newHead);
list.printList();