// Stack
let myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("Stack basics");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());


//set

let SetA = new mSet();
let setB = new mSet();  


// binary tree
const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMinheight());
console.log(bst.findMaxheight());
console.log(bst.isBalanced());

bst.add(10);

console.log(bst.findMinheight());
console.log(bst.findMaxheight());
console.log(bst.isBalanced());

console.log(`inOrder: ${bst.inOrder()} `); // left substree then right subtree starting with the left most
console.log(`preOrder: ${bst.preOrder()} `); //nodes first then leaves
console.log(`postOrder: ${bst.postOrder()} `); // leaves first then parent nodes
console.log(`levelOrder: ${bst.levelOrder()} `); // search by each level

// hash table
console.log(hash('beau', 10)); // has will always be a number between 0 and 9
console.log(hash('quincy', 10));

// because there are only 4 buckets hardcoded, there will be collision and buckets will have more items
// but with more buckets, there are fewer collisions.
let ht = new HashTable();
ht.add('beau','person');
ht.add('fido','dog');
ht.add('rex','dinosour');
ht.add('tux','penguin');
console.log(ht.lookup('tux'));
ht.print();


//linked lists

let ll = new LinkedList();

ll.add('Kitten');
ll.add('Puppy');
ll.add('Dog');
ll.add('Cat');
ll.add('Fish');

console.log(ll.size());
console.log(ll.removeAt(3));
console.log(ll.elementAt(3));
console.log(ll.indexOf('Puppy'));
console.log(ll.size());