/**
 * Bubble Sort
 * Selection Sort
 * Insertion Sort
 * Merge Sort
 * Quick Sort
 */

// sort()method sort items according to string Unicode 
// The time and space complexity of the sort cannot be guaranteed as it is implementation dependent.
const num = [2, 6, 1, 33, 656, 32];
// console.log(num.sort());

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

// console.log('Before bubbleSort');
// console.log(bubble);

// bubbleSort(bubble);

// console.log('After bubbleSort');
// console.log(bubble);


// SelectionSort
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    let length = array.length;
    for (let i = 0; i < length; i++){
        let minIdx = i;
        let tmp = array[i];
        for (let j = i+1; j < length; j++){
            if (array[j]<array[minIdx]) {
                minIdx = j;
            }
        }
      
        array[i] = array[minIdx];
        array[minIdx] = tmp;
    }
}

// console.log('Before selectionSort');
// console.log(numbers);

// selectionSort(numbers);

// console.log('After selectionSort');
// console.log(numbers);

// This type of sorting performs well when it comes to small small data sets 
// Time complexity
// Best case O(n)
// Average and worst O(n^2) 

// Space complexity
// O(1)
const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// My insertion sort solution
function MyinsertionSort(array) {
    let length = array.length;
    let tmp;

    if (length <= 1) {
        return array;
    }

    for (let i = 1; i <= length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (array[i] < array[j]) {
                tmp = array[j];
                array[j] = array[i];
                array[i] = tmp;
            }
            if (array[j] < array[j - 1]) {
                tmp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = tmp;
            }
            
        }
    }
    return array;    
}


function insertionSort(array) {
    const length = array.length;
      for (let i = 0; i < length; i++) {
          if (array[i] < array[0]) {
        //move number to the first position
        array.unshift(array.splice(i,1)[0]);
      } else {
        // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
        if (array[i] < array[i-1]) {
          //find where number should go
          for (var j = 1; j < i; j++) {
            if (array[i] >= array[j-1] && array[i] < array[j]) {
              //move number to the right spot
              array.splice(j,0,array.splice(i,1)[0]);
            }
          }
        }
      }
      }
  }
  
  // Other insertion sort solution
  function insertionSort(arr)  
  {  
      let n = arr.length;
      let i, key, j;  
      for (i = 1; i < n; i++) 
      {  
          key = arr[i];  
          j = i - 1;  
      
          /* Move elements of arr[0..i-1], that are  
          greater than key, to one position ahead  
          of their current position */
          while (j >= 0 && arr[j] > key) 
          {  
              arr[j + 1] = arr[j];  
              j = j - 1;  
          }  
          arr[j + 1] = key;  
      }  
  }  
      
  // Other insertion sort solution
  function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentValue = arr[i]
      let j
      for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = currentValue
    }
    return arr
  }
  
console.log('Before insertionSort');
console.log(numbers2);

insertionSort(numbers2);
console.log('After insertionSort');
console.log(numbers2);
