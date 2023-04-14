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

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find( data ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    console.log('find data:', data);
    const findNode = (point) => {
      if(point && point.data > data) {
        //console.log(point.data, 'point && point.data > data', (point && point.data > data) && 'left');
        return findNode(point.left)
      } else if (point && point.data < data) {
        //console.log(point.data, 'point && point.data < data', (point && point.data < data) && 'right');
        return findNode(point.right)
      } else if (point && point.data === data) {
        //console.log(point.data, point instanceof Node, 'point && point.data === data', (point && point.data === data) && point);
        return point;  
      } else {
        //console.log('NEW');
        return null //new Node(null);
      }
    }
    return findNode(this.root());
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
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
      tree.add(2);
      tree.add(7);
      tree.add(1);
      tree.add(8);
      tree.add(4);
      tree.add(32);
      tree.add(12);
      tree.add(14);
      tree.showTree(tree.root());
      console.log(tree.find(2).data, 2);
      console.log(tree.find(8).data, 8);
      console.log(tree.find(14).data, 14);
      console.log(tree.find(32).data, 32);