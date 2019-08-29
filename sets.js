// Sets are unordered Array with no duplicate
// used to check the presence of array

(function(){
    this.mSet = function(){
       //collection to hold the set
       let collection = [];
       
       // Check if a value exists within a set --has
       this.has = function(element){
           return (collection.indexOf(element) !== -1);
       }

       // Get all values in a set
       this.values = function(){
           return collection;
       }

       // Add an element to a set
       this.add = function(element){
           if(!this.has(element)){
               collection.push(element);
               return true;
           }
           return false;
       }

       // remove element from the set
       this.remove = function(element){
           if(this.has(element)){
               const index = collection.indexOf(element);
               collection.splice(index, 1);
               return true;
           }
           return false;
       }

       // Get the size of the collection
       this.size = function(){
           return collection.length;
       }

       // Return the union of 2 sets
       this.union = function(otherSet){
           let unionSet = new mSet();
           let firstSet = this.values();
           let secondSet = otherSet.values();

           firstSet.forEach(function(e){
               unionSet.add(e);
           });

           secondSet.forEach(function(e){
            unionSet.add(e);
           });

           return unionSet;
       }

       // Return intersection between two sets
       this.intersection = function(otherSet){
           let intersectionSet = new mSet();
           let firstSet = this.values();

           firstSet.forEach(function(e){
               if(otherSet.has(e)){
                   intersectionSet.add(e);
               }
           });

           return intersectionSet;
       }

       // Returns the difference between two sets
       this.difference = function(otherSet){
           let differenceSet = new mSet();
           let firstSet = this.values();
           firstSet.forEach(function(e){
               if(!otherSet.has(e)){
                   differenceSet.add(e);
               }
           });
           return differenceSet;
       }

       // Test is a set is a subset of a different set
       this.subset = function(otherSet){
           let firstSet = this.values();
           return firstSet.every(function(value){
               return otherSet.has(value)
           })
       }

    }
}());