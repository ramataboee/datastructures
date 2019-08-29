//Queues
//Similar to a stack except it it FIFO(first in first out)
// Used to hold data

(function(){
    this.Queue = function(){
        collection = [];

        // Print items in a queue
        this.print = function(){
            console.log(collection);
        }

        // Add item to a queue
        this.enqueue = function(element){
            collection.push(elemenet)
        }

        //remove item from a queue
        this.dequeue = function(){
            return collection.shift(); 
        }

        // get element at the front in a queue
        this.front = function(){
            return collection[0];
        }

        // get size of the collection
        this.size = function(){
            return collection.length;
        }

        // check if a queue is empty
        this.isEmpty = function(){
            return (collection.length === 0);
        }
    }
}());