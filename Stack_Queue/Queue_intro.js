/**
 * Queues FIFO (First in first out)
 * Queue are used in a lot in programming problems and interview questions
 * For example, 1. waitlist app to purchase tickets for a concert that uses queue.
 * 2. Restaurant app where users check into the restaurant to see if they can get table that uses queue.
 * 3. Uber and Lyft
 * 
 * lookup O(n)
 * enqueue(push) O(1)
 * dequeue(pop) O(1)
 * peek O(1)
 * 
 * Question 1 ) Why would you not want to use an array to build a queue?
 *  Removing the first elements then need to shift all the elements. This is very inefficient.
 */

class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue() {
        
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
    // isEmpty
}

const myQueue = new Queue();

myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');

console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());

//Joy
//Matt
//Pavel
//Samir