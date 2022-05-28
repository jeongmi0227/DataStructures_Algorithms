/**
 * Array Introduction
 * lookup O(1)
 * push O(1)
 * insert O(n)
 * delete O(n)
 */
const strings = ['a', 'b', 'c', 'd'];
// 4*4=16 bytes of storage

strings[2] //O(1)

// push adds it at the end of the array
strings.push('e'); // O(1) not looping 

// pop remove last item of array
strings.pop();  // O(1) Time complexity

// unshift add item at the begining of array
strings.unshift('x');   // O(n) depending on the size of the arry loop through each item to change the index

// splice add item middle of the array
strings.splice(2, 0, 'new'); //O(n/2) => O(n)

// Static array (fixed inside)

// Dynamic array (allow us to copy and rebuild an array at a new location, which with more memory)
/**
 * lookup O(1)
 * append * O(1) can be O(n)
 * insert O(n)
 * delete O(n)
 */

// reference type
var obj1 = { value: 10 };
var obj2 = obj1;
var obj3 = { value: 10 };
//obj1 === obj2
// context
// instantiation