const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.next = null;
  }

  getUnderlyingList() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.next;
  }

  enqueue( value ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const enqueueListNode = (link) => {
      if( !link.next ) {
        link.next = new ListNode(value);
        return 
      }
      enqueueListNode(link.next);
    }
    enqueueListNode(this);
  }

  dequeue() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const value = this.next.value;
    this.next = this.next.next;
    return value;
  }
}

module.exports = {
  Queue
};

const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(6);
    queue.enqueue(7);
    console.log(queue);
