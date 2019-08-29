// Priority array pass in items with priority. items with higher priorities
// are passed to the beginning of the queue
// if all items have the same priority, it behaves like a normal queue
(function(){
    this.PriorityQueue = function(){
        let collection = [];

        // print queue
        this.print = function(){
            console.log(collection);
        }

        // queue items into the collection with priorities
        this.enqueue = function(element){
            if(this.isEmpty()){
                collection.push(element)
            }else{
                let added = false;
                for(let i in collection){
                    if(element[1] < collection[i][1]){
                        collection.splice(i,0,element); // add element to collection array at the index
                        added = true;
                        break;
                    }
                }
                if(!added) collection.push(element);
            }
        }

        //remove element from the queue
        this.dequeue = function(){
            let value = collection.shift();
            return value;
        }

        // get element at the front of the queue
        this.front = function(){
            return collection[0];
        }

        // return size of the queue
        this.size = function(){
            return collection.length;
        }

        // check if the queue is empty
        this.isEmpty = function(){
            return (collection.length === 0 );
        }
    }
}());