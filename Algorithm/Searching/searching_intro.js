/**
 * Linear Search or Sequential search is a method of finding a target value within a list.
 * It sequentially checks each elements of the list for the target value until a match is found or until
 * all the elements have been searched. 
 * Linear search:we have items that can nodes or can be numbers or can be anything. Go through one by one looking through the list.
 * Best case O(1) Worst cast O(n)
 * 
 * List is already sorted ? do better than O(n)
 * Binary Search : discard half of the item  
 * Sorting will use computation power. However, storing data in a data structure like a tree instead of a linear data structure, like an array.
 * is more efficient. It is divide and conquer approach, which gives us a log of N time.
 * 
 * 
 * Sometimes we have to do traversal and traversal simply means going to node to node, either finding a specific thing or making sure that you touch every single node.
 * Traversal and search is often used interchangably, sometimes meaning the same thing, sometimes not.
 * Tree and graph work really well a lot of cases, when we search for things, we have the benefit, 
 * but also when we insert or delete items we have better performance than an array, but we also maintain the order that we wouldn't have otherwise with hash tables.
 * Trees and graphs are used a lot when we want to search nodes or visit every node, and it represents a lot of data that models the real world.
 */

// Breadth First Search / Traversal
// How it works?
// Start with the root node and move left to right across the second level
// Then move left to right across the third level (left to right level by level)

// Note: Breadth first search uses additional memory 
// because it is necessary to track the child nodes of all the nodes on a given level while searching that level,
// This means that we need to track every node and its children in order


// Depth First Search / Traversal
// The search follows one branch of the tree down as many levels as possible until the target node is found
// or the end is reached. When the search can't go any further, it continues at the nearnest ancestor with an unexplored child.
// Depth First Search has a lower memory requirement than breadth First Search, because it's not necessary to store all the child pointers at each level.


// Props and cons of DFS / DFS

//If you know a solution is not far from the root of the tree:

//If the tree is very deep and solutions are rare: 

//If the tree is very wide:

//If solutions are frequent but located deep in the tree:

//Determining whether a path exists between two nodes:

//Finding the shortest path: