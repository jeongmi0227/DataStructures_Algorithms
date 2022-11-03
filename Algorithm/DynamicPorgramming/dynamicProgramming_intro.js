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

const memized = memoizedAddTo80();
console.log('1',memized(5));
console.log('2', memized(5));
console.log('3',memized(6));