class Node {
    data; 
    next = null;
    constructor(data) {
        this.data = data;
    }
}

class LinkedList {
    head;
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
}

module.exports = LinkedList;

