/**
 * data structure where element are stored in a node
 *  a node contains: the element itself and the reference to the next node
 * 
 * Linked Lists have a dynamic size, effecient insert and delete, no random access unlike arrays, 
 * no memory waste and sequential access is slower than arrays because elements are not in contiguous
 * memory locations
 * 
 * Every linked list has a head pointer which points to the first node and a size (number of nodes in list)
 * the last node points to null
 * 
 * Time complexity is O(n) which is second fastest after O(log n)
 */ 

 (function(){
    this.LinkedList = function(){
        let length = 0;
        let head = null;

        let Node = function(element){
            this.element = element; //  this is the element
            this.next = null; // this is the link
        }

        this.size = function(){
            return length;
        }

        this.head = function(){
            return head;
        }

        // add element to a linked list
        this.add = function(element){
            let node = new Node(element);

            if(head === null){
                head = node;
            }else{
                let currentNode = head;

                while(currentNode.next){
                    currentNode = currentNode.next;
                }

                currentNode.next = node; // add the node at the end of the list
            }

            length++;
        }

        // Remove element from linked list
        this.remove = function(element){
            let currentNode = head; // start at the head
            let previousNode; // 

            if(currentNode.element === element){ // the head node is what we are lookign for
                head = currentNode.next;
            }else{ // more nodes exist in the list
                //go through each element to find the node with the element
                while(currentNode.element !== element){ 
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }

                previousNode.next = currentNode.next; // if found skip the node we a re looking for and reference the next node
            }

            length --;
        }

        // check empty linked list
        this.isEmpty = function(){
            return length === 0;
        }

        // Find the index/ position of an element
        this.indexOf = function(element){
            let currentNode = head;
            let index = -1;

            while(currentNode){ // traverse through all elements
                index++;

                if(currentNode.element === element){
                    return index; //if found return it's index
                }

                currentNode = currentNode.next;
            }

            return -1; // element is not in the linked list
        }

        // get element at a given index
        this.elementAt = function(index){
            let currentNode = head;
            let count = 0;

            while(count < index){ // go through until the count == index
                count ++;
                currentNode = currentNode.next;
            }
            return currentNode.element;
        }

        // add element at a given index
        this.addAt = function(index, element){
            let node = new Node(element);

            let currentNode = head; // start at the begining
            let previousNode;
            let currentIndex = 0;

            // we are trying to add the element at a =n index larger than the length of the list
            if(index > length){
                return false;
            }

            if(index === 0){ // add node at the begining of the list
                node.next = currentNode;
                head = node;
            }else{
                while(currentIndex < index){ // traverse th elist until we get to an index we want
                    currentIndex++;
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                // we found the index we want to insert the node at
                node.next = currentNode;
                previousNode.next = node;
            }

            length++;
        }

        // remove element at a given index
        this.removeAt = function(index){
            let currentNode = head;
            let previousNode;
            let currentIndex = 0;

            //cannot remove a negative index nor greater than our list
            if(index < 0 || index >= length){
                return null;
            }

            if(index === 0){
                head = currentNode.next; 
            }else{
                while(currentIndex < index){ // ensure the index is always less than the list index
                    currentIndex++;
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                // if this is the index we want i.e currentIndex == index, then skip the node to remove
                previousNode.next = currentNode.next;
            }

            length--;
            return currentNode.element;
        }


    }
 }());

