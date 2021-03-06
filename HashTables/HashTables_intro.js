// Hash tables or hash maps, maps, unordered maps, dictionaries, object there are many ways to call
// objects in JS are a type of hash table.
// Python :  dictionaries
// JS : objects
// Java : maps
// Ruby : hashes

// A hash function is simply a function that generates a value of fixed length for each input that it gets.
// idempotent :  a function given an input always outputs the same output.
// we have a key and send it through a hash function that is going to 
// hash something really fas and then map the hash that came outto be 
// into a memory address where we want to store data. 

// Hash Tables 
// insert O(1) : hash the key through the has function and places it automatically into the address space that it comes up with.
// lookup O(1) : access the property that property is going to get hashed and direct us exactly to the address to find the values.
// delete O(1) : use the delete the item right away, hash table is not ordered, we don't have to shift indexes.
// search O(1) : use hash function to search.
let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function () {
        console.log('ahhhh!!!');
    }
}

console.log(user.age); // O(1)
user.scream(); // O(1)
// main problem with hash problem
// Hash Collision :  computer has limited space and when we create an object or a hash table, the computer decide how much space to allocate. 
// It's not going to allocate all the space to the hash table. It's going to allocate a bit of it. The hash function randomly assigned a space in memory and put it in. 
// * Hash function will not evenly distribute until the memory space is full, although hash functions are optimized to try to distribute data.
// It slows down reading and writing with a hash table with O and divided by K
// O(n/k) K is the size of the hash table
// O(n/k) => O(n)
// Occasionally depending on the hash function it might take O(n)

// Q1) Implement A Hash table
class HashTable{
    constructor(size) {
        this.data = new Array(size);
    }
    // 
    set(key, value) {   //O(1)
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];    // can modify arry into linked list so that a delete becomes a lot easier than if it was an array.
        } 
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {  // O(1)
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++){
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
    // put _ means private (developer standard) O(1)
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++){
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    }
    // values(key) {
    //     for (let i = 0; i < this.data.length; i++){
    //         if (this.data[i]&&this.data[i][0][0] === key) {
    //             return this.data[i][0][1];
    //         }
    //     }
    // }

}

const myHashTable = new HashTable(50);
console.log(myHashTable.set('grapes', 10000));
console.log(myHashTable.set('apples', 50000));

console.log(myHashTable.get('grapes'));
console.log(myHashTable.keys());
console.log(myHashTable.values('apples'));

//Google Question (Recurring Character)
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// version1 (Simple) 
// function firstRecurringCharacter(input) {
//     for (let i = 0; i < input.length; i++){
//         for (let j = i+1; j < input.length; j++){
//             if (input[i] === input[j]) {
//                 return input[i];
//             }
//         }
//     }
//     return undefined;
// }   //O(n^2)

// version 2
function firstRecurringCharacter(input) {
    let map = {};
    for (let i = 0; i < input.length; i++){
        if (map[input[i]]!==undefined) {
            return input[i];
        } else {
            map[input[i]] = i;
        }
    }
    return undefined;
}   // O(n) time complexity
//O(1) space complexity 

// My solution
// function firstRecurringCharacter(input) {
//     let arr = [];
//     for (let i = 0; i < input.length; i++){
//         if (arr[input[i]]==input[i]) {
//             return input[i];
//         } else {
//             arr[input[i]]=input[i];    
//         }
//     }
//     return undefined;
// }

const array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const array3 = [2, 3, 4, 5];
console.log(firstRecurringCharacter(array1));
console.log(firstRecurringCharacter(array2));
console.log(firstRecurringCharacter(array3));

