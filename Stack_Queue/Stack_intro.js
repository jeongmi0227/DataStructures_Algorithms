/**
 * Stack and Queue are very similar.
 * They are both linear data structures.
 * The linear data structures allow us to traverse through data elements sequentially one by one.
 * in which only one data element can be directly reached.
 * Stack vs Queue can be implemented in a similar way, the main differences is only how items get removed from this data structure.
 * Unlike an array in stacks and queues, there is no random access operation.
 * We mainly use stacks and queues to run commands like push, peak,pop, all of which deal exclusively with the element at the beginning or the end of the data structure.
 * Why we use stack and queues? (Although it is limited compared to the array and linked list)
 * We can build stacks and queues which are using arrays and linked lists
 * Sometimes it's good to have these higher level data strcutures that are built on top of lower level one such as linked lists and arrays to limit the operations we can do on them.
 * In Computer science having this limited ability on a data structure is an advantage because we can control that whoever uses this data structure performs only the right operations that are efficient.
 */

/**
 * Stacks LIFO(Last in first out)
 * lookup O(n)
 * pop O(1)
 * push O(1)
 * peek O(1)
 * 
 * Stacks are very important in language specific engines.
 * Most programming languages are modeled with the stack architecture in mind, and when functions get called in a programming language, usually they follow this model of LIFO
 * Stack : browser history, undo option, etc.
 */

// Think about how Arrays and Linked lists might benefit or might not benefit.(Interview Questions)

// Stacks 
// has top and bottom 

// goolge
// udemy.com
// youtube

// Both are good (Think about what are the operations and priorities )
// Arrays : arrays allow cache locality, which makes them technically faster when accessing its items in memory because they are right next to each other verse a linked list that has them scattered all over memory.
// Linked lists : linked list have extra memeory associated with them because we have to hold on to those pointers. However, they have more dynamic memory, we can keep adding things to the list versus an array where you have either a static array or dynamic array that has certain amount of memory
// and as soon as it's about to reach its limit, it's going to have to double up that memory and create new space ofr it somewhere in memory


// Queue
// Arrays (Never) : we have to unshift each elementsO(n)
// Linked lists : Pointers to head and tail

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Create Stack with linked list (My solution)
class MyStack{
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    // see the very top element
    peek() {
        if (this.length > 0) {
            return this.top.value;
        } else {
            return this.top;
        }
    }
    // add new node to the top of the stack 
    push(element) {

        const node = new Node(element);
        if (this.length == 0) {
            this.top = node;
            this.bottom = this.top;
        } else {
            let prev = this.top;
            this.top = node;
            this.top.next = prev;
        }
        this.length++;
        return this;
    }
    // remove from the top of the stack
    pop() {
        let newTop = this.top.next;
        if (newTop) {
            this.top = newTop;
            this.length--;
            return this;
        } else {
            this.top = null;
            this.bottom = this.top;
            this.length = 0;
            return null;
        }
    }
    // check that stack is empty
    isEmpty() {
        if (this.length == 0) {
            return true;
        } else {
            return false;
        }
    }
}
// Create Stack with linked list
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }

        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }

}


// Create Stack with Array
// Array already has push and pop function no need to implement in here
class ArrayStack {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    push(value) {
        this.array.push(value);
        return this;
    }

    pop() {
        this.array.pop();
        return this;
    }

}


// const myStack = new Stack();
const myStack = new ArrayStack();
// console.log(myStack.isEmpty());
myStack.push('google');
myStack.push('udemy');
myStack.push('amazon');
myStack.push('facebook');
// console.log(myStack.isEmpty());


console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
// myStack.pop();
// console.log(myStack.peek());
// myStack.pop();
// console.log(myStack.isEmpty());
// console.log(myStack.peek());
// myStack.pop();
// console.log(myStack.isEmpty());
