//#1 - Sort 10 schools around your house by distance:
// Quick sort - small lists of items
// Insertion sort : Easy to code and it has space complexity of O(1)

//#2 - eBay sorts listings by the current Bid amount:
// Merge sort 
// Radix or Counting sort : Bid is Fixed length of intergers O(n logN)ß

//#3 - Sport scores on ESPN
// Counting sort
// Quick sort :  better space for complexity

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// Merge sort: Data is big O(n logN)

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// Counting sort
// Insertion sort : pre ordered list is going to work better than any other type of sorting.

//#6 - Temperature Records for the past 50 years in Canada
// Counting sort
// Radix or Counting (if tmp no decimal places)
// Quick sort (Decimal numbers)

//#7 - Large user name database needs to be sorted. Data is very random.
// Quick or Merge
// Quick sort

//#8 - You want to teach sorting for the first time
// Bubble sort, selection sort

// In most cases, sorting algorithm that the languages using underneath the hood is 
// either quick sort or insertion sort and merge sort combine together.


// Review
// Quick sort: Use quick sort when the average case performance matters more than the worst case performances
// Because quick sort allows us to sort in O(n logN) but worst case in O(n^2)
// Merge sort: Always O(n logN), it is also stable, gives same results in order, if two items are the same.
// Although the space complexity is a little bit hibher than quick sort , it is definitely a useful sort.


// Insertion sort, selection sort, bubble sort : Doing something quick and dirty and experiment arount sorting.
// (Although insertion sort is great for small or nearly sorted inputs)

// Interview tips!
// During the interview you might say, in those rare cases that they ask you to implment a sorting algorithm, you'll say 
// well, because we have a time constraint, I would like to use something naive and not efficient, like bubble sort, which is slow in real life.
// Instead of implementing something like merge sort, if it's okay with you becuase we can assume that merge sort is something that we can implement with a library or fairly easily with documentation. 

// Or, you can say, we can just use Merge sort to divide and conquer the code to make it more efficient

// Important!
// Understand the trade offs between different algorithms
// Decide based on their speed, stability and their readability whether the input is already sorted or nearly sorted
// How large is the input, we can make decision on sorting.