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
  
// console.log('Before insertionSort');
// console.log(numbers2);

// insertionSort(numbers2);
// console.log('After insertionSort');
// console.log(numbers2);


// Merge Sort O(n log n)
// Quick Sort use Divide and & Conquer the idea of recursion
// log(n) is kind of like the height of the tree
const numbers3 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle) 
  const right = array.slice(middle)
  console.log('left:', left);
  console.log('right:', right);

  
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && 
        rightIndex < right.length){
     if(left[leftIndex] < right[rightIndex]){
       result.push(left[leftIndex]);
       leftIndex++;
     } else{
       result.push(right[rightIndex]);
       rightIndex++
    }
  }  
  console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


// const answer = mergeSort(numbers3);
// console.log(answer);


// Quick sort
// Just like merge sort (divide and conquer algorithm)
// O(n log n)
// Quick sort uses pivoting technique to break the main list into smaller lists
// and these smaller lists use the pivoting technique until they are sorted.
// Quicksort space complexity is O(log(n)) better than Mergesort
// Time complexity worst case is O(n^2) if the pivot is the smallest or the largest item in the list. Not really splitting the list in half.
// Have to pick a good pivot for quicksort.

// If the list was pre-sorted for whatever reason, in that list, if we pick the pivot to be the first item or the last item, 
// then sort routine will take very long time.
// Ideally in a quicksort picking the pivot intelligently based on list.
// Quicksort has a lot of variance to it and there's different implementations.
// However, Quicksort is usually the fastest on average, but the one downside is that it has some pretty nasty worst case behaviors.

const numbers4 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right){
  const len = array.length; 
  let pivot;
  let partitionIndex;

  if(left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    
    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}
   
function partition(array, pivot, left, right){
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(array[i] < pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers4, 0, numbers4.length - 1);
console.log(numbers4);

// When to use what?
// When should we use insertion sort? (Only a few items and mostly sorted data)
// asnwer: Insertion sort should be used with only a few items if your input is small or items are mostly sroted then it is really fast.
// It uses very little space( O(1)), and more importantly, it's really easy to implement in code.

// When should we use bubble sort?
// answer: It's very rare that we'll find this in real life because it is not very efficient. 
// It's only really used for educational purposes as a way to teach sorting.
// When should we use selectio sort?
// answer: Won't be using it. Mostly it's being used as a teaching mechanism.

// When should we use mergesort?
// answer: If you are worried about worst case scenarios, then you should use merge sort.
// But if you want to sort in memeory on you machine and you're worried about space complexity, 
// merge sort is going to be really expensive to use this space.


// when should we use quicksort?
// answer: It has the same speed as time as merge sort but less space complexity. If you are worried about worst case then pick other sorting algorithm