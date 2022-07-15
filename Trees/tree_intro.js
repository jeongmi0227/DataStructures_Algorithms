/*
Trees are a data structure that have hierarchical structure.
Trees can have zero or more child nodes. parent child relationship(unidirectional)
Abstract syntax tree : code gets broken down by the machine into abstract syntax tree, so it understand
what we wrote down.
Linked list is technically a type of tree, but with just one single path and it's linear.
Tree node only can point to its child and nodes don't really have to reference their parent.
*/

/*
Binary tree: Each node can only have either zero, one or two nodes, 
and each child can only have one parent.

lookup: O(logN)
insert: O(logN)
delete: O(logN)

of nodes = 2^h -1
log nodes = height of the tree

log 100 = 2
10^2 =100 

log N simply means that based on the height, the maximum number of decisions.

*/

/*
Binary search tree is subset of binary tree (good at searching and great for comparing things)

Hasb table vs Binary Search tree
Binary search tree preserves relationships

Binary search tree rules
1. All child nodes in the tree to the right of the root node must be greater than the current node.
(to the left decreases, to the right increases)
2. A node can only have up to two children because it's binary tree.

Balanced vs Unbalanced
unbalanced turns into a long length list where instead of being able to do the log and operations,
now we have to loop through every single node and lookup and searches.

Unbalanced (Interview question: Why an unbalanced binary search tree is bad?)
lookup: O(n)
insert: O(n)
delete: O(n)
How do we make binary search tree balanced?
AVL trees and Red black tree allows us to make sure that our binary search tree is going to be balanced.
*/

/*
BST pros and cons
Most operations or all operations in a binary search tree are better than O(n)
Ordered
Flexible size

No O(1) Operations
Compared to an array, a lookup will be a lot faster. 
Fore searches versus if we iterate through an entire array. 
If the array is unsorted, inserts and deletes are also faster than an array unless the array is adding to the end.
Otherwise, arrays have to shift all the indexes versus a binary search tree that is just O(logN)

Although Hash tables allow us to insert and search at constant time with binary searches, 
with binary search tree we have sorted data and we also have this struucture of parent child relationship that we won't be able to get too much with hash tables.
Binary search trees aren't the fastes for anything.
However, on average, an array or an object will have faster operation, but there are certain conditions where they do outperform objects in arrays.
*/

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree{
    
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
            } else if(currentNode.value===value){
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
        while(currentNode){
          if(value < currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.left;
          } else if(value > currentNode.value){
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
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.left;
                
                //if parent < current value, make left child a right child of parent
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.left;
                }
              }
            
            //Option 2: Right child which doesnt have a left child
            } else if (currentNode.right.left === null) {
              currentNode.right.left = currentNode.left;
              if(parentNode === null) {
                this.root = currentNode.right;
              } else {
                
                //if parent > current, make right child of the left the parent
                if(currentNode.value < parentNode.value) {
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
              while(leftmost.left !== null) {
                leftmostParent = leftmost;
                leftmost = leftmost.left;
              }
              
              //Parent's left subtree is now leftmost's right subtree
              leftmostParent.left = leftmost.right;
              leftmost.left = currentNode.left;
              leftmost.right = currentNode.right;
    
              if(parentNode === null) {
                this.root = leftmost;
              } else {
                if(currentNode.value < parentNode.value) {
                  parentNode.left = leftmost;
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = leftmost;
                }
              }
            }
          return true;
          }
        }
      }
}
    

const tree = new BinarySearchTree();

tree.insert(9);


tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.insert(160);
tree.insert(155);

// console.log(tree.lookup(20));
tree.remove(20);
// console.log();
console.log(traverse(tree.root));
//      9
//  4       20
//1 6   15      170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null :
        traverse(node.left);
    tree.right = node.right === null ? null :
        traverse(node.right);
    return tree;
}