/**
 * Bubble Sort
 * Insertion Sort
 * Selection Sort
 * Merge Sort
 * Quick Sort
 */

// sort()method sort items according to string Unicode 
// The time and space complexity of the sort cannot be guaranteed as it is implementation dependent.
const num = [2, 6, 1, 33, 656, 32];
console.log(num.sort());

let bubble = [6, 5, 3, 1, 8, 7, 2, 4];
//  5 3 1 6 7 2 4 8

function bubbleSort() {
    // Once every iteration done, the biggest number will be placed at the end of array
    let tmp;
    for (let i = 0; i < bubble.length; i++){
        for (let j = 0; j < bubble.length - i - 1; j++){
            if (bubble[j] > bubble[j + 1]) {
                tmp = bubble[j];
                bubble[j] = bubble[j + 1];
                bubble[j + 1] = tmp;
            }
        }
    }
}

console.log('Before bubbleSort');
console.log(bubble);

bubbleSort(bubble);

console.log('After bubbleSort');
console.log(bubble);


// SelectionSort
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    
}
console.log('Before selectionSort');
console.log(numbers);

selectionSort(numbers);

console.log('After selectionSort');
console.log(numbers);
