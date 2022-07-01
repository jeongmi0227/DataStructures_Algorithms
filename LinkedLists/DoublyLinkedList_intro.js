/**
 * Doubly linked list : A node can point to the new node, a new node can also point to the previous node
 * Why this is important?
 * Answer : doubly linked lists allow us to traverse our list backwards. In singly linked list, we were only able to go from the beginning all the way to the end.
 * Cannot know what comes before a node.
 * However, with a doubly linked list, we can start from the end and go backwards.(exactly the same as the singly linked list, but contains additional pointer to the previous node)
 * Searching through a doubly linked list can actually be a little bit more efficient.
 * Lookup can technically be O of n divided by two since we start at both ends.(we can pick the optimum place to start)
 * 
 * Downside to a doubly linked list: might have to hold a little bit more memory, an additional block of memory
 * prepend O(1)
 * append O(1)
 * lookup O(n)
 * insert O(n)
 * delete O(n)
 * 
 * Pros and cons
 * A singly linked list : less memory, delete and insert there is technically less operation.
 * Downside is a signly linked list cannot be interated in reverse or traverse from back to front.
 * It is suitable when we have less memory or memory is really expensive and main goal is that fast insertion and deletion as well as not much searching. Especially when we have insertion at the beinning of a list.
 * 
 * A doubly linked list : It can be iterated or traverse both from the front or from the back.
 * Downside is fairly complex and it require more memeory and storage for extra property(previous node pointer)
 * extra operation, It is good when we don't have that much limitation on memory and want good operation for searching for elements.
 * 
 * Most of time during interview, a singly linked list will be dicussed
 */

class DoublyLinkedList{
    constructor(value) {
        this.head = {
            value : value,
            prev : null,
            next : null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = {
            value: value,
            prev : null,
            next : null
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
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

    prepend(value) {
        const newNode = {
            value: value,
            prev: null,
            next:null
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index,value) {
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = {
            value: value,
            prev: null,
            next:null
        }
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;

        return this;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = this.head.next;
            counter++;
        }
        return currentNode;
    }

    remove(index) {
        const leader = this.traverseToIndex(index - 1);
        const removeNode = leader.next;
        const follower = removeNode.next;
        leader.next = follower;
        follower.prev = leader;
        this.length--;
        return this;

    }
}

const doubly = new DoublyLinkedList(5);
doubly.append(10);
doubly.append(28)
doubly.append(35);
doubly.prepend(1);
console.log(doubly.printList());
doubly.insert(2,88);
console.log(doubly.printList());
doubly.remove(3);
console.log(doubly.printList());