const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList( l, k, head = null ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  //console.log('!l || !l.next', !l || !l.next);
  if(!head) head = l;
  if(!l) return null;
  if(l.value == k){ 
    if(!l.next){ 
      return null;
    } else { return removeKFromList(l.next, k, l.next ) }
  }
  if(l.next && l.next.value == k){
    l.next = l.next.next;
    return removeKFromList( l, k, head);
  } 
  if(!l.next){
    return head;
  }
  //console.log(k,l)
  return removeKFromList( l.next, k, head);
}
/*
function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);
    const expected = convertArrayToList([1, 2, 4, 5]);
  removeKFromList(initial, 3);
  //console.log(expected);
*/
module.exports = {
  removeKFromList
};
