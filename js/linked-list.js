class Node {
    data; 
    next = null;
    constructor(data) {
        this.data = data;
    }
}

class LinkedList {
    head;
    constructor(nodes) {
        if(Array.isArray(nodes)) {
            this.addNodesAtEnd(nodes);
        } else {
            this.setHead(new Node(nodes));
        }
    }
    setHead(node) {
        this.head = node;
    }
    getHead() {
        return this.head;
    }
    traverseToEndOfList() {
        let temp = this.getHead();
        while(temp.next !== null) {
            temp = temp.next;
        }
        return temp;
    }
    // Program to convert a array to a linked list
    // Program to add nodes at the end of the linked list
    addNodesAtEnd(data) {
        if(Array.isArray(data)) {
            if(this.getHead() === undefined) {
                this.setHead(new Node(data[0]));
                data.shift();
                let temp = this.traverseToEndOfList();
                for(const item of data) {
                    temp.next = new Node(item);
                    temp = temp.next;
                }
            }
        } else {
            let temp = this.traverseToEndOfList();
            temp.next = data;
        }
    }
    printList() {
        let temp = this.getHead();
        let printString = "";
        while(temp !== null) {
            printString += `${temp.data}->`;
            temp = temp.next;
        }
        printString += `NULL`;
        console.log(printString);
    }
    // Program to find the length of the linked list
    length() {
        let temp = this.getHead();
        let count = 0;
        while(temp != null) {
            count++;
            temp = temp.next;
        }
        return count;
    }
    traverseNnodes(n) {
        let temp = this.getHead();
        for(let i = 0; i < n; i++) {
            temp = temp.next;
        }
        return temp;
    }
    // Program to find whether the element exist in the linked list or not.
    checkElementExist(elementToFind) {
        let temp = this.getHead();
        while(temp !== null) {
            if(temp.data === elementToFind) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }
    // Program to delete the Kth element of the linked list
    deleteKthElement(k, head) {
        let count = 1;
        let temp = head, current = null, next = null, nextAfterNext = null;
        if(count === k) {
            head = head.next;
        } else {
            while(temp !== null) {
                count = count + 1;
                current = temp;
                next = temp.next;
                nextAfterNext = next.next;
                if(count === k) {
                    current.next = nextAfterNext;
                    break;
                }
                temp = temp.next;
            }
        }
        return head;
    }

    //Program to add node at the head of the linked list
    addNodeAtHead(data, head) {
        let newNode = new Node(data);
        newNode.next = head;
        return newNode;
    }

    //Program to add node before the Kth element of the linked list
    addNodeBeforeKthElement(k, data, head) {
        let newNode = new Node(data);
        let temp = head, count = 0, currentNode = null, nextNode = null, nextAfterNextNode = null;
        while(temp !== null) {
            count = count + 1;
            currentNode = temp;
            nextNode = currentNode.next;
            nextAfterNextNode = nextNode.next;
            if(k === 1) {
                return this.addNodeAtHead(data, head);
            }
            if(count === (k - 1)) {
                currentNode.next = newNode;
                newNode.next = nextNode;
                nextNode.next = nextAfterNextNode;
                break;
            }
            temp = temp.next;
        }
        return head;
    }
}

module.exports = LinkedList;

