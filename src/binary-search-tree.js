const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
    this.data = null;
  }

  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this._root
  }

  add( data ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    console.log("ADD - data:", data)
    const addNode = (point) => {
      if(point && point.data > data) {
        point.left = addNode(point.left)
        //console.log('left');
      } else if (point && point.data < data) {
        point.right = addNode(point.right)
       //console.log('right');
      } else {
        point = new Node(data);
       //console.log('NEW', data);
      }
      return point;
    }
    
    this._root = addNode(this.root());
  }

  showTree( node ) {
    if ( !node ) {
      console.log('---------');
      return;
    }
    console.log(node, 'left', node && node.left);
    console.log(node, 'right', node && node.right);
    this.showTree(node && node.left);
    this.showTree(node && node.right);
  }

  has( data ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return !!this.find(data);
  }

  find( data, remove = false ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    console.log('find data:', data);
    const findNode = (point, ancest, remove) => {
      if(point && point.data > data) {
        //console.log(point.data, 'point && point.data > data', (point && point.data > data) && 'left');
        return findNode(point.left, point, remove)
      } else if (point && point.data < data) {
        //console.log(point.data, 'point && point.data < data', (point && point.data < data) && 'right');
        return findNode(point.right, point, remove)
      } else if (point && point.data === data) {
        //console.log(point.data, point instanceof Node, 'point && point.data === data', (point && point.data === data) && point);
        //console.log('remove && ancest && ancest.left && ancest.left === data', remove, ancest, ancest.left.data === data, remove && ancest && ancest.left && ancest.left === data)
        if(remove && ancest && ancest.left && ancest.left.data === data) ancest.left = null;
        //console.log('remove && ancest && ancest.right && ancest.right === data', remove, ancest, ancest.right.data === data, remove && ancest && ancest.right && ancest.right === data)
        if(remove && ancest && ancest.right && ancest.right.data === data) ancest.right = null;
        if(remove && !ancest) this._root = null;
        return point;  
      } else {
        //console.log('NEW');
        return null //new Node(null);
      }
    }
    return findNode(this.root(), null, remove);
  }

  remove( data ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const rebaseTree = (node, first = false) => {
      if ( !node ) {
        console.log('---------');
        return;
      }
      //console.log(node, 'left', node && node.left);
      //console.log(node, 'right', node && node.right);
      if(!first) this.add(node.data);
      rebaseTree(node.left);
      rebaseTree(node.right);
    }
    rebaseTree(this.find(data, true), true);
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}


module.exports = {
  BinarySearchTree
};

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(14);
tree.remove(8);
tree.remove(9);
console.log(tree.has(14), false);
console.log(tree.has(8), false);
console.log(tree.has(9), false);
console.log(tree.has(2), true);
console.log(tree.has(6), true);
console.log(tree.has(128), true);
console.log(tree.has(31), true);
console.log(tree.has(54), true);
console.log(tree.has(1), true);