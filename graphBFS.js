/**
 * Graph Breadth first search - directed graph
 * @param {*} graph 
 * @param {*} root 
 */
function bfs(graph,root){
    let nodesLen = {}; // distances to the root node

    for(let i in graphs){
        nodeLen[i] = Infinity;
    }

    nodesLen[root] = 0; 

    let queue = [root]; // keep track on nodes to visit
    let current; // track of current node

    while(queue.length != 0){
        current = queue.shift();

        let currentConnected = graph[current]; // all nodes connected to current node
        let neighborIndex = []; //keep track of nodes connected to current node
        let index = currentConnected.indexOf(1); // finds first connected node

        while(index != -1){ // if no node
            neighborIndex.push(index);
            index = currentConnected.indexOf(1, index + 1); // next node after the previous
        }

        for(let j in neighborIndex){
            if(nodesLen[neighborIndex[j]] == Infinity){ 
                nodesLen[neighborIndex[j]] = nodesLen[current] + 1; //
                queue.push(neighborIndex[j]); // store neighbors
            }
        }
    }
    return nodesLen;
}