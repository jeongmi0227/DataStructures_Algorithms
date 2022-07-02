// LinkedList 
// singly and doubly linked list

// singly linkedList contains set of nodes that has two items
// 1. value of data 2. ponter to the next node in line.
// first node is call head and the last node is called the tail.
// linkedlist are null terminated, which signifies that it's the end of the list.
// link to next element until the last node points null.

// Q1) Why linkedList ? When to use LinkedList instead of Array Hash?
// linkedList vs Array
// In an array, an element or elements are indexed, we can easily go to item based on index.
// In linkedList, start at the head and traverse the list until get to item O(n)
// Another advantage that array might have is that most computers have caching systems that make 
// reading from sequential memory, that is memory right next to each other shelves right next to each other
// faster than reading scattered addresses.
// linkedList nodes are actually scattered all over memory like hash tables.
// traversing or iterating through a linked list is usually a bit slower than array even though both are 0(n)

// linkedList vs Hash tables
// One advantae that it has over hash tables is that there is order to LinkedList
// each node points to the next node, so we can have sorted data on like hash tables

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
    //implementing O(n)
    insert(index, value) {
        // solution
        // check params
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = {
            value: value,
            next: null
        };
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this;
    }
    // lookup O(n)
    traverseToIndex(index) {
        // check params
        let counter = 0;
        let currentNode = this.head;
   
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        
        return currentNode;
    }
    // O(n)
    remove(index) {
        // check params
        const leader = this.traverseToIndex(index - 1);
        const removeNode = leader.next;
        leader.next = removeNode.next;
        this.length--;
        return this;
    }

    reverse() {
        
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
// console.log(myLinkedList.printList());
myLinkedList.insert(2, 99);
// console.log(myLinkedList.printList());
myLinkedList.insert(20, 88);
// console.log(myLinkedList.printList());
myLinkedList.remove(4);
console.log(myLinkedList.printList());


// Exercise : Reverse the a singly linked list

// [ 1, 10, 99, 5, 88 ] => [ 88, 5, 99, 10, 1 ]

// my solution 1: Iterate each Node elements and prepend elements.
let cnt = 1;
let currentNode = myLinkedList.head;
const newLinkedList = new LinkedList(myLinkedList.head.value);
while (cnt < myLinkedList.length) {
    currentNode = currentNode.next;
    newLinkedList.prepend(currentNode.value);
    cnt++;
}

console.log(newLinkedList.printList());
