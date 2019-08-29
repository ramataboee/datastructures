// holds data that when visualized looks like a tree. 
// All data points in a tree are called nodes.

// the top of the tree (root) is called the parent, all other nodes are children of the root node.
// the parent(root node) has 2 children.
// every child node can have 2 child nodes (thus binary);left-child and right-child.
// every child is a parent of their own subtree
// children of the left-child and right-child are called siblings.
// each sibling is called a leaf.

// the binary tree is ordered
// each substree is less than or equal to the parent node
// and each right subtree is greater than or equal to the parent node

// binary tree searching is slower than hash table but faster than linear key searching
// time complexity of BST is O(log n) - which is the fastest because half the tree does not need to be traversed

//Node of the tree
class Node{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left; // point to left node
        this.right = right; // points to right node
    }
}

// Binary Seach Tree (BST)
class BST{
    constructor(){
        this.root = null;
    }

    //method to add data to tree
    add(data){
        const node = this.root; // reference to the root node
        // if it is the first node
        if(node === null){
            this.root = new Node(data);
            return;
        }else{ // if not the first node

            // use recursive function to figure out there to place the data
            const searchTree = function(node){
                if(data < node.data){ // left side of the tree
                    if(node.left === null){
                        node.left = new Node(data);
                        return;
                    } else if(node.left !== null){
                        return searchTree(node.left); //continue searching to find where to put the node
                    }
                }else if(data > node.data){ // right side of the tree
                    if(node.right === null){
                        node.right = new Node(data);
                        return;
                    }else if(node.right !== null){
                        return searchTree(node.right);
                    }
                }else{ // if nodes are equal just return null
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    // find minimum of the tree - the minimum will always be all the way left-most down the left of the tree
    findMin(){
        let current = this.root;

        while(current.left !== null){
            current = current.left;
        }

        return current.data;
    }

    // find maximum of the tree - the max will always be all the way right-most down the right of the tree
    findMax(){
        let current = this.root;

        while(current.right !== null){
            current = current.right;
        }

        return current.data;
    }

    // find data on a tree
    find(data){
        let current = this.root;

        while(current.data !== data){
            if(data < current.data){
                current = current.left;
            }else{
                current = current.right;
            }

            if(current == null){
                return null;
            }
        }
        return current;
    }

    isPresent(data){
        let current = this.root; // get the root node

        // traverse the tree if the node is not null
        while(current){
            //compare node data first
            if(data === current.data){ // found the data
                return true;
            }
            
            if(data < current.data){ // left subtree
                current = current.left;
            }else{ // right sub tree
                current = current.right;
            }
        }
        return false; // data was never found
    }

    // remove node from the tree
    remove(data){

        // recursive function to traverse the tree
        const removeNode = function(node, data){

            // node is null
            if(node == null){
                return null; // tree is empty
            }

            // compare node data against the data to remove 
            if(data == node.data){ // we found the data
                
                //data found but node has no children
                if(node.left == null && node.right == null){
                    return null; // return null as reference 
                }

                //node has no left child
                if(node.left == null){
                    return node.right; // return the right node as the reference node
                }

                // node has no right children
                if(node.right == null){
                    return node.left; // return the left node 
                }

                // node has 2 children
                let tempNode = node.right;
                while(tempnode.left !== null){
                    tempNode = tempNode.left;
                }

                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            }else if(data < node.data){ // look into the left subtree
                node.left = removeNode(node.left, data);
                return node;
            }else{ // look into the right subtree
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = remove(this.root, data);
    }

    //Finding tree height 

    //height : distacne between the root node and any give leaf node

    //min-height: distance from root node to the first leaf node without 2 children
    //max-height: distance from root to last most bottom leaf node.
    // balanced tree: the difference between the min height and max height differ most by 1
    // when a tree id balanced, searching through it is most effecient

    // find a balanced tree
    isBalanced(){
        return (this.findMinheight() >= (this.findMaxheight() - 1));
    }

    //min height
    findMinheight(node = this.root){
        if(node == null){
            return -1;
        };

        let left = this.findMinheight(node.left);
        let right = this.findMinheight(node.right);

        if(left < right){
            return left + 1;
        }else{
            return right + 1;
        }
    }

    // max height
    findMaxheight(node = this.root){
        if(node == null){
            return -1;
        }

        let left = this.findMaxheight(node.left);
        let right = this.findMaxheight(node.right);

        if(left > right){
            return left + 1;
        }else{
            return right + 1; 
        }
    }


    // tree traversal - explore tree data structures and find all values in a tree
    // types of traversal
    // 1. indepth first search : a subtree is explored as deep as possible before moving to the next subtree
    // ways to achieve this:
    // i. inOrder tree traversal - start the search from the left most node and end at the right most node
    // ii. preOrder  - explore root nodes before leaves
    // iii. postOrder - explores the leaf nodes before the roots
    
    // levelOrder - breadth first search : explores all nodes within a level before going onto the next level

    inOrder(){
        if(this.root == null){
            return null;
        }else{
            let result = new Array();

            function traverseInOrder(node){
                // if left node exists, traverse left node
                node.left && traverseInOrder(node.left); // short circuit evaluation  - if 1st statement is true, it runs the 2nd command, if 1st statement is false it will not run the 2nd
                result.push(node.data);
                // if right node exists, then traverse right node.
                node.right && traverseInOrder(node.right);
            }

            traverseInOrder(this.root);
            return result;
        }
    }

    preOrder(){
        if(this.root == null){
            return null;
        }else{
            let result = new Array();

            function traversePreOrder(node){
                // parent nodes explored before leaves
                result.push(node.data);
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right);
            }

            traversePreOrder(this.root);
            return result;
        }
    }

    postOrder(){
        if(this.root == null){
            return null;
        }else{
            let result = new Array();

            function traversePostOrder(node){
                node.left && traversePostOrder(node.left);
                node.right && traversePostOrder(node.right);
                result.push(node.data);
            }

            traversePostOrder(this.root);
            return result;
        }
    }
    // breadth first search - 
    levelOrder(){
        let result = [];
        let Q = []; // temp array to push things off

        if(this.root != null){
            Q.push(this.root); // start with root node

            while(Q.length > 0){ 
                let node = Q.shift(); // takes first element in an array

                result.push(node.data);
                if(node.left != null){
                    Q.push(node.left);
                }

                if(node.right != null){
                    Q.push(node.right);
                }
            }

            return result;
        }else{
            return null;
        }
    }
}