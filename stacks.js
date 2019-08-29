//Stack implement LIFO (last in first out)

//function: push, pop, peek, length
// Array implements Stacks

(function(){
    this.Stack = function(){
       this.count = 0;
       this.storage = {};
       
       // Add values using to stack -- push
       this.push = function(value){
           this.storage[this.count] = value;
           this.count++;
       }

       //remove values from stack -- pop
       this.pop = function(){
           if(this.count === 0) return undefined;

           this.count--;
           let result = this.storage[this.count];
           delete this.storage[this.count];
           return result;
       }

       // get size of the stack -- size
       this.size = function(){
           return this.count;
       }

       // view the item at the top of the list -- peek
       this.peek = function(){
           return this.storage[this.count-1];
       }
    }
}());



