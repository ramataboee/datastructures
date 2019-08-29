// used to implement associative arrays or mappings of key-value pairs
//common way to implement the map data structure or objects
// they are very efficient - the average time of each lookup is not tied to the number of elements stored in a table
// time complexity - worst case: O(n)
//                 - average : O(1)

/**
 * how it works:
 * 1. takes a key input and runs it through a hash function 
 *  - hash function maps string to numbers. and usually numbers correspond to indexes in an array
 * 2. each key should be mapped to one number
 *  - if 2 keys map to 1 number in a hash this is called a collission.
 *  - one way to handle collisions is to store both the key value pair at the index, then iterate through the array to get the item
 * 
 * Time complexity is O(1) - 4rd fastest on big Os
 */

let hash = (string, max) => {
    let hash = 0;
    for(let i in string){
        hash+=string.charCodeAt(i);
    }

    return hash%max;
}

(function(){
    this.HashTable = function(){
        let storage = []; // stores data

        const storageLimit = 4; // number of buckets

        this.print = function(){
            console.log(storage);
        }

        this.add = function(key, value){
            let index = hash(key, storageLimit); // returns an index from hash function

            if(storage[index] === undefined){ // noting in the bucket
                storage[index] = [[key,value]];
            }else{ // there is something in the bucket
                let inserted = false;
                for(let i = 0; i<storage[index].length; i++){ // go through each index to see if the key already exists
                    if(storage[index][i][0] === key){ // if the key exists, set a new value
                        storage[index][i][1] = value;
                        inserted = true;
                    }
                }

                if(inserted === false){ // add many entries into one bucket
                    storage[index].push([key, value]);
                }
            }
        }

        // delete item from hash table based on key passed
        this.remove = function(key){
            let index = hash(key, storageLimit);

            if(storage[index].length === 1 && storage[index][0][0] === key){ // one item found at the bucke, then delete
                delete storage[index];
            }else{ // there is more than one item at that location, so delete only with what matches the key
                for(var i in storage[index]){
                    if(storage[index][i][0] === key){
                        delete storage[index][i];
                    }
                }
            }
        }

        // search hash table
        this.lookup = function(key){
            let index = hash(key, storageLimit);

            if(storage[index] == undefined){ // item is not in the hash table
                return undefined;
            }else{
                for(var i in storage[index]){
                    if(storage[index][i][0] === key){
                        return storage[index][i][1];
                    }
                }
            }
        }



        // Hash function
        // string - the string we want to hash
        // max - the number of buckets we are usung in a hash table to store values.

        
    } 
}());