/**
 * What is good code?
 *  1. Readable
 *  2. Scalable (BigO)
 *  BigO notation is the language we use for taking about how long an algorithm takes to run. 
 *  BigO and scalability of code, it simply means when we grow bigger and bigger with our input, how much does the algorithm slow down. BigO allows us and concerns us with how many steps it takes in a function.
 *  
 * */ 
// BigO notation Types
// O(n) : Linear Time(Fair), BigO depends on the number of ‘n’

// ES5
function compressAllBoxes(boxes) {
    boxes.forEach(function (item){
        console.log(item);
    });
}

//ES6
const compressAllBoxes = boxes => {
    boxes.forEach(box => console.log(box));
}

// O(1) : Constant Time(Excellent), takes the first item in the array number of operation is only one.
// no matter how big this the number of boxes are, it always going to do the constant amount of time on a function.
// It's a flat line in terms of salability. The same predictability when it comes to computing is very nice.
function compressFirstBox(boxes) {
    console.log(boxes[0]);
}

const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]);  // O(1)
    console.log(boxes[1]);  // O(1)
}

logFirstTwoBoxes(boxes);    // O(2)

// What is the difference between big oh, big omega and big theta notations?
// https://www.quora.com/What-is-the-difference-between-big-oh-big-omega-and-big-theta-notations


// When calculating BigO We always think about the worst case.

//  Rule Book
//  Rule 1: Worst Case
//  Think about the worst case scenario, because in temrs of scalability, we can't assume things are going well.
//  Rule 2: Remove Constants
//  Rule 3: Different terms for inputs
//  Rule 4: Drop Non Dominants