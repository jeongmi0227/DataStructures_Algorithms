/**
 * Recursion is when we define something in terms of itself, simply it's a function that refers to itself inside of the function.
 * Recursive functions have two paths
 * 1. recursive case: call the function again and run it.
 * 2. base case: stop calling the function
 * 
 * How recursion works
 * 1. identify the base case
 * 2. identify the recursive case
 * 3. get closer and closer and return when needed, usually you have 2 returns
 * 
 * Note: Anything do with a recursion CAN be done iteratively(loop)
 * Why use recursion
 * advantage : Make code dry, readability
 * drawback: large stack
 * The main drawback is that iterative approaches tend to be more efficient
 * Because they don't make these additional function calls that take up stack space.
 * with the downside being that iterative solutions might be not as readable.
 * 
 * Recursion might be good option when we are not really sure how deep the data structures are, 
 * where we don't know how many loops to go through.
 * Recursion might be useful for things such as tree data structures and doing traversal
 * Note : be mindful of space complexity and stack overflow
 * Tail call iptimization
 * 
 * When to use recursion?
 */

let counter = 0;
function inception() {
    console.log(counter);
    if (counter > 3) {
        return 'done!';
    }
    counter++;
    return inception();
}

// console.log(inception());

// Write two functions that finds the factorial of any number.
// One should use recursive, the other should just use a for loop.

// factorial simply means multiply 
// 5! = 5 * 4 * 3 * 2 * 1 
// 5! = 5 * 4!
// 5! = 5 * 4 * 3!
function findFactorialRecursive(number) {   //O(n)

    // code here
    if (number == 2) {
        return number;
    }
    
    return number * findFactorialRecursive(number-1);
}

// console.log(findFactorialRecursive(5)); // 120

// use for loop
function findFactorialIterative(number) { // O(n)
    // code here
    let answer = 1;
    if (number == 2) {
        answer = 2;
    }
    for (let i = 2; i <= number; i++) {
    // for (let i = 1; i <= number; i++) {
        answer = answer * i;
    }
    
    return answer;
}
// console.log(findFactorialIterative(1));

// The fibonacci series is a series in which eahc number is the sum of the previous two numbers.
// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequnce is that each value is the sum of the 2 previous values, that means that for N=5 -> 2+3

function fibonacciIterative(n) { //O(n)
    // code here
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[n];

}
// console.log(fibonacciIterative(3));

 // O(2^N) expotential - recursive algorithms that solve a problem of size N.
 // Fibonacci sequence and recursion can be made to over O(n) using dynamic programming.
function fibonacciRecursive(n) {   
    // code here
    if (n < 2) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
// console.log(fibonacciRecursive(5));

// Complicated problems like traversing or searching through trees or graphs,
// BFS, DFS (searching) is useful and better than iterative approaches

// New Rules 
// Every time you are using a tree or converting something into a tree, consider recursion

// 1. Divided into a number of subproblems that are smaller instances of the same problem. (ex. Fibonacci numbers or factorial)
// 2. Each instance of the subproblem is identical in nature
// 3. The solutions of each subproblem can be combined to solve the problem at hand.

// Divide and Conquer using Recursion

//Implement a function that reverses a string using iteration...and then recursion!

// iterative 
function reverseStringIterative(str) {
    let arr = [...str];
    let newArr = '';

    for (let i = arr.length-1; i >= 0; i--){
        newArr += arr[i];
    }

    return newArr;
}

function reverseStringSolution(str) {
 
    let arr = [...str];
    if (arr.length > 0) {
        return arr.pop()+reverseStringSolution(arr);
    }
}
console.log(reverseStringSolution('yoyo mastery'));

// function reverseStringRecursive (str) {
//     if (str === "") {
//       return "";
//     } else {
//       return reverseStringRecursive(str.substr(1)) + str.charAt(0);
//     }
// }

// function reverseString(str) {
//     let arrayStr = str.split("");
//     let reversedArray = [];
//     //We are using closure here so that we don't add the above variables to the global scope.
//     function addToArray(array) {
      
//       if(array.length > 0) {
//         reversedArray.push(array.pop());
//         addToArray(array);
//       }
//       return;
//     }
//     addToArray(arrayStr);
//     return reversedArray.join("");
//   }

// console.log(reverseString('yoyo mastery'));
// console.log(reverseString('yoyo mastery'));
//should return: 'yretsam oyoy'

