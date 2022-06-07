// LinkedList 
// singly and doubly linked list

// singly linkedList contains set of nodes that has two items
// 1. value of data 2. ponter to the next node in line.
// first node is call head and the last node is called the tail.
// linkedlist are null terminated, which signifies that it's the end of the list.
// link to next element until the last node points null.

// Q1) Why linkedList ? When to use LinkedList instead of Array Hash?

// prepend(add beinning of a link list) O(1)
// append O(1)
// lookup(traversal to look for an item) O(n)
// insert O(n)
// delete O(n)

// what is pointer?
// A pointer is simply a reference to another place, a memory or another object or another node.

// let myLinkedList = {
//     head: {
//         value:10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next:null // null terminated
//             }
//         }
//     }
// }
class Node { 
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// 10->5->16
// 1->10->5->16
// 1->10->99->5->16
class LinkedList{
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        // O(1)
        // code here
        // This is my solution : keep looping until it hits the null value
        // newNode solution is given from the lecture
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        // O(1)
        // This solution is given in the lecture
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
        // This is my solution
        // const newNode = {
        //     value: value,
        //     next: this.head
        // };

        // this.head = newNode;
        // this.length++;
        // return this;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }
    //implementing
    insert(index, value) {
        const newNode = new Node(value);
      
        const newNode2 = new Node(this.head.value);
        for (let i = 0; i <= index; i++){
            console.log("i : "+i);
            if (i === index) {
                newNode.value = this.head.value;
                newNode.next = this.head.next;
            }else {
                // newNode2.value = this.head.value;
                // newNode2.next = this.head.next;
                this.head.value = this.head.next.value;
                this.head.next = this.head.next.next;
                console.log(newNode2);
                this.printList();
            }
            
            
        }
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
// console.log(myLinkedList.printList());
myLinkedList.insert(2, 99);
console.log(myLinkedList.printList());
// console.log(myLinkedList);

