/**
 * Dynamic Programming
 * It is an optimization technique by using caching
 * 
 * Dynamic programming is a way to solve problems by breaking it down into a collection
 * Sub problems, solving each of those problems just once, and storing their solutions in case next time the same sub problem occurs.
 * 
 * 
 * Memorization is a specific form of caching that invovles caching the return value.
 * memorization is simply a way to remember a solution to a problem.
 * 
 * Dynamic Programming as combining divide & conquer and memoization with recursion to get savings in performance.
 * 
 * 1. Can be divided into subproblem?
 * 2. Recursive solution
 * 3. Are there repetitive subproblems?
 * 4. Memoize subproblems
 * 5. increase the performance
 */
function addTo80(n) {
    console.log('Long time');
    return n + 80;
}


// closure
function memoizedAddTo80() {
    let cache = {};
    return function (n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log('LONG TIME')
            cache[n] = n + 80;
            return cache[n];
        }    
    }
}

// const memized = memoizedAddTo80();
// console.log('1',memized(5));
// console.log('2', memized(5));
// console.log('3', memized(6));

// fibonacci recursion takes O(2^n)
// Dynamic function can reduce time and space complexity O(n) by using memroziation
let cacluations1 = 0;
function fibonacci(n) {
    cacluations1++;
    
    if (n < 2) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}


let cacluations2 = 0;
function fibonacciMaster() {
    // Time complexity O(n) downside is increased space complexity
    // Hash table or an object to store pre calculated answers.
    let cache = {};
    return function fib(n) {
        cacluations2++;
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            }
            cache[n] = fib(n - 1) + fib(n - 2);
            return cache[n];
        }
    }
}

console.log('fib ',fibonacci(35)); 
console.log('cacluations1 ',cacluations1);

const fasterFib = fibonacciMaster();
console.log('DP ', fasterFib(35));
console.log('cacluations2 ', cacluations2);