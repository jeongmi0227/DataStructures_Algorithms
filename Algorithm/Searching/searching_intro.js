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


// Props and cons of BFS / DFS
// They both do the same thing traversal, but each one is used ofr different reasons and in interviews
// you'll get questions about what type of traversal to do and usually you'll have one of these two answers
// Time complexity for BFS and DFS are same
// They all visit the nodes at lease once, so it is O(n) all traversal is O(n)
// When we are trying to traverse through a tree or a graph we are really trying to do is walk through 
// the tree withough ever repeating ourselves.
// The order is the thing that matters when it comes to BFS, DFS for a search


// BFS
// Adavantage: It's very good for finding the shortest path between a starting point and any other reachable node.
// Because we always start off with the root node and then search the cloest nodes first and then the nodes further and then further.
// Disadvantage: BFS requires more memory than DFS

// If you have additional information on the location of the target node.
// You know that the node is likely in the upper level of a graph, then BFS is better.
// (Because it will search through the cloest nodes first.)


// DFS
// If you know that the node is likely at the lower level of a graph, 
// Perhaps depth where search is better in that case (opposite to BFS)

// Advantage: Good at asking the question does the path exist to a certain node from a source node to a target node
// It uses less memory than BFS
// Disadvantage: It can get slow, if the tree or graph is really deep and it's not necessarily good at finding the shortest path like BFS



//If you know a solution is not far from the root of the tree:
// BFS

//If the tree is very deep and solutions are rare: 
// BFS (DFS will take long)

//If the tree is very wide:
// DFS (BFS will need too much memory)
// The way BFS works is that it has to keep track of the nodes
// in the current level in a queue (might take up too much memory)

//If solutions are frequent but located deep in the tree:
// DFS

//Determining whether a path exists between two nodes:
// DFS

//Finding the shortest path:
// BFS
class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
class BinarySearchTree {
    
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;

        while (currentNode) {
            if (currentNode.value > value) {
                currentNode = currentNode.left;
            } else if (currentNode.value < value) {
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                return currentNode;
            }
        }
        return false;
    }

    // remove
    remove2(value) {

        let currentNode = this.lookup(value);
        let newNode = this.lookup(value);

        currentNode = currentNode.right;
       
        while (currentNode.left != null) {
            currentNode = currentNode.left;
        }
        newNode.value = currentNode.value;
        currentNode.value = null;

        return newNode;
    }


    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                //We have a match, get to work!
            
                //Option 1: No right child: 
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                
                        //if parent > current value, make current left child a child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;
                
                            //if parent < current value, make left child a right child of parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }
            
                    //Option 2: Right child which doesnt have a left child
                } else if (currentNode.right.left === null) {
                    currentNode.right.left = currentNode.left;
                    if (parentNode === null) {
                        this.root = currentNode.right;
                    } else {
                
                        //if parent > current, make right child of the left the parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;
                
                            //if parent < current, make right child a right child of the parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }
            
                    //Option 3: Right child that has a left child
                } else {
    
                    //find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }
              
                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;
    
                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
    }
    // Iterative
    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);
    
        while (queue.length > 0) {
            currentNode = queue.shift();
            console.log(currentNode.value);
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }
    // Recursive
    breadthFirstSearchR(queue,list) {
        if (!queue.length) {
            return list;
        }
        const currentNode = queue.shift();
        list.push(currentNode.value);
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }

        return this.breadthFirstSearchR(queue, list);

    }
    // Recursion
    DFSInorder() { 
        return traverseInOrder(this.root, []);
    }

    // Recursion
    DFSPostorder() { 
        return traversePostOrder(this.root, []);
    }

    // Recursion
    DFSPreorder() { 
        return traversePreOrder(this.root, []);
    }
}
// Using stack data structure
// Space complexity 
function traverseInOrder(node, list) {
    // console.log(node.value);
    if (node.left) {
        traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
        traverseInOrder(node.right, list);
    }
    return list;
}

function traversePreOrder(node, list) {
    // console.log(node.value);
    list.push(node.value);
    if (node.left) {
        traversePreOrder(node.left, list);
    }
    if (node.right) {
        traversePreOrder(node.right, list);
    }
    return list;
}


function traversePostOrder(node, list) {
    // console.log(node.value);
    if (node.left) {
        traversePostOrder(node.left, list);
    }
    if (node.right) {
        traversePostOrder(node.right, list);
    }
    list.push(node.value);
    return list;
}

//      9
//  4       20
//1   6   15    170
// DFS
// InOrder - [1, 4, 6, 9, 15, 20, 170]
// PreOrder - [9, 4, 1, 6, 20, 15, 170] it's better way to recreate the tree
// PostOrder - [1, 6, 4, 15, 170, 20, 9]
const tree = new BinarySearchTree();

tree.insert(9);


tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(tree.breadthFirstSearch());
// console.log(tree.breadthFirstSearchR([tree.root],[]));
console.log(tree.DFSInorder());
console.log(tree.DFSPreorder());
console.log(tree.DFSPostorder());



