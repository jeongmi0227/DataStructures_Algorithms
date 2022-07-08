/**
 * From leet code 232. Implement Queue using Stacks (One of the most common interview quesitons)
 * 
 * Implement a first in first out (FIFO) queue using only two stacks. 
 * The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, 
which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. 
You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
 

Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
 

Constraints:

1 <= x <= 9
At most 100 calls will be made to push, pop, peek, and empty.
All the calls to pop and peek are valid.
 

Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity? 
In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.
 */
class MyQueue{
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    peek() { 
        return this.stack1[this.stack1.length - 1];
    }
    
    push(value) { 
     
        let len1= this.stack1.length;
        for (let i = 0; i < len1; i++) {
            this.stack2.push(this.stack1.pop());
        }

        this.stack1.push(value);
        let len2 = this.stack2.length;
        for (let i = 0; i < len2; i++){
            this.stack1.push(this.stack2.pop());
        }
        
    }
    
    pop() { 
        return this.stack1.pop();
    }
    
    empty() {
        return (this.stack1.length == 0) ? true : false;
    }
}

const obj = new MyQueue();
obj.push(1);
// console.log(obj);
obj.push(2);
// console.log(obj);
obj.push(3);
obj.push(4);
console.log(obj);
console.log(obj.peek());
console.log(obj.pop());
console.log(obj.peek());
console.log(obj);
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.empty());

class CrazyQueue{
    constructor() {
        this.first = [];
        this.last = [];
    }

    enqueue(value) {
        const length = this.first.length;
        for (let i = 0; i < length; i++){
            this.last.push(this.first.pop());
        }
        this.last.push(value);
        return this;
    }

    dequeue() {
        const length = this.last.length;
        for (let i = 0; i < length; i++){
            this.first.push(this.last.pop());
        }
        this.first.pop();
        return this;
    }

    peek() {
        if (this.last.length > 0) {
            return this.last[0];
        }

        return this.first[this.first.length - 1];
    }
}

const myQueue = new CrazyQueue();
myQueue.peek();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
console.log(myQueue);
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();
