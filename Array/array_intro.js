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

// Implementing an array
class MyArray{
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {    // O(1)
        return this.data[index];
    }

    push(item) {    // O(1)
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() { // O(1)
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) { // O(n)
        const item = this.data[index];
        this.shiftItem(index);
        return item;
    }

    shiftItem(index) {  // O(n)
        for (let i = index; i < this.length-1; i++){ //O(n)
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}
const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.delete(0);
newArray.push('are');
newArray.push('nice');
// newArray.pop();
// newArray.pop();
console.log(newArray);


// In interviews, we should treat any String questions as an array question.
// Strings are simply array of characters
// e.g reverse a string, we should be thinking is to convert this into an array, do some sort of a loop on it or an operation
// using something like a split method in JavaScript and then returning it as a string after you've finished the operations with them

// QUESTION1 ) Reverse a string
// Create a function that reverses a string:
// 'Hi My name is Jeongmi' should be:
// 'mignoeJ si eman yM iH'

function reverse(str) {
    // check input 
    if (!str || str.length < 2 || typeof str != 'string') return 'input data is not valid';
    // solution 1
    // const backwards = [];
    // const totalItems = str.length - 1;
    // for (let i = totalItems; i >= 0; i--){
    //     backwards.push(str[i]);
    // }
    // return backwards.join('');
    
    // My solution
    // first make string to array
    let arr = str.split("");
    const reversed = [];
    // loop through each item and reverse the letters
    const length = arr.length-1;
    for (let i = length; i >= 0; i--){
        reversed[reversed.length] = arr[i];
    }
    
    return reversed.join('');
}
const str = 'Hi My name is Jeongmi';
console.log(reverse(str));

// solution 2 (using built in method)
function reverse2(str) {
    return str.split('').reverse().join('');
}
// solution 3 (ES6)
const reverse3 = str => str.split('').reverse().join('');
const reverse4 = str => [...str].reverse().join('');

console.log(reverse2(str));
console.log(reverse3(str));
console.log(reverse4(str));

// QUESTION2 ) Merge Sorted Arrays
arr1 = [0, 3, 4, 31];
arr2 = [4, 6, 30];
// [0,3,4,4,6,30,31]
function mergeSortedArrays(arr1, arr2) {
    // solution1
    const mergedArray = [];
    let array1Item = arr1[0];
    let array2Item = arr2[0];
    let i = 1;
    let j = 1;
    // Check input
    if (arr1.length === 0) {
        return arr2;
    }

    if (arr2.length === 0) {
        return arr1;
    }

    while (array1Item|| array2Item) {
        if (!array2Item||array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = arr1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = arr2[j];
            j++;
        }
    }
    console.log(mergedArray);
    return mergedArray;


    // My solution
    // let newArr = [];

    // for (let i = 0; i < arr1.length; i++) {    //O(n)
    //     newArr.push(arr1[i]);
    // }

    // for (let i=0; i < arr2.length; i++) {   //O(n)
    //     newArr.push(arr2[i]);
    // }
    // let tmp;
    // for (let i = 0; i < newArr.length; i++){    //O(n)
    //     if (newArr[i] > newArr[i + 1]) {
    //         tmp = newArr[i + 1];
    //         newArr[i + 1] = newArr[i];
    //         newArr[i] = tmp;
            
    //     } 
    // }
    // return newArr;
}
mergeSortedArrays(arr1, arr2);

// pros and cons of Arrays
// pros 
// Fast lookups
// Fast push/pop
// Ordered

// cons
// Slow inserts
// Slow deletes
// Fiexed size * (if using static array)