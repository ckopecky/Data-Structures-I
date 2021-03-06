/* eslint-disable class-methods-use-this */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  // Wraps the given value in a node object and adds the node to the tail of the list
  // If the list is empty, the new element is considered the tail as well as the head
  // If there is one element in the list before the new element is added, the new element becomes the tail of the list
  addToTail(value) {
    const newNode = {
      value: value,
      next: null
    }
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    if(this.head === this.tail){
      this.head = null;
      this.tail = null;
      return null;
    } else {
      let oldHead = this.head;
      this.head = this.head.next;
      if(this.head === null){
        this.tail = null;
        oldHead = null;
      }
      console.log(oldHead);
      return oldHead.value;
    }
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {

  }
}

const myList = new LinkedList;
myList.addToTail(10);
myList.addToTail("a");
console.log(myList);

myList.addToTail(true);
myList.addToTail(4);
myList.removeHead();
myList.removeHead();
myList.removeHead();
myList.removeHead();
myList.addToTail(1952);
myList.addToTail(192);


console.log(myList);


// module.exports = LinkedList;
