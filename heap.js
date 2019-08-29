/**
 * Binary Heap is a partially ordered binary tree which satisfies the heap property
 * - each node has at most 2 child nodes
 * 1. max heap - all parent nodes >= child nodes
 * 2. min heap - all child nodex >= parent nodes (parent nodes smallest, child biggest)
 * the order of child nodes does not matter if they are on the same level
 * binary heap level are fully filled(complete binary tree),if the last levels are partially filled,
 * they are filled from left to right. 
 * 
 * Heaps are more often implemented as arrays with indexes.
 * Although heaps do not have index 0. it is null
 * 
 * How to find elements in a binary heap from an array
 * - Left child: index * 2
 * - right child: index * 2 + 1
 * - parent: index/2
 * 
 * the size of the array == last element of the array
 */

 //Min heap

 (function(){
    this.MinHeap = function(){
        let heap = [null];

        // insert an element into the heap
        this.insert = function(num){
            heap.push(num); // element 

            if(heap.length > 2){ // more than one item in the key
                let index = heap.length - 1; // last index in the heap

                while(heap[index] < heap[Math.floor(index/2)]){ //if last item is less than parent, move it up(min heap)
                    if(index >= 1){
                        [heap[Math.floor(index/2)], heap[index]] = [heap[index], heap[Math.floor(index/2)]]; // destructure - switch node with parent node

                        if(Math.floor(index/2) > 1){ // if the parent node is not the root node
                            index = Math.floor(index/2); // set as parent node
                        }else{
                            break; // break when the element is not smaller than the parent node
                        }
                    }
                }
            }
        }


    }
 }());