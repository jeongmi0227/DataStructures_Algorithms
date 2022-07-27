/**
 * Directed and Undirected Graphs
 * Directed (one way)
 * Undirected (not one way)
 
 * Weighted Graph
 * Unweighted or Weighted
 * example of weighted graph : shortest path (calculating optimal paths).
 * 
 * Cyclic vs Acyclic
 * Cyclic : vertices connected in circular fashion it is called cyclic. One node to another to another and then back to the original node
 */

// Edge List
const graph1 = [[0, 2], [2, 3], [2, 1], [1, 3]];

// Adjacent List
// A graph where the index is the node and the value is the nodes neighbors.
// The index of the array is the value of the actual Graph node
const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]];


// Adjacent Matrix
// This maxtrix is simply going to have zeros and ones indicating whether the Node X has a connection to Node Y
const graph3 = {
    0:[0, 0, 1, 0],
    1:[0, 0, 1, 1],
    2:[1, 1, 0, 1],
    3:[0, 1, 1, 0]
}

// Exercise : Graph Implementation
class Graph{
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertext(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }
    addEdge(node1, node2) {
        // undirected Graph
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertext;
            for (vertext of nodeConnections) {
                connections += vertext + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
}


const myGraph = new Graph();

myGraph.addVertext('0');
myGraph.addVertext('1');
myGraph.addVertext('2');
myGraph.addVertext('3');
myGraph.addVertext('4');
myGraph.addVertext('5');
myGraph.addVertext('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

myGraph.showConnections();

