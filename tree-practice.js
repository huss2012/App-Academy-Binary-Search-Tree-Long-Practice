const { root } = require('npm');
const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here
  //console.log(rootNode);
  while (rootNode.left !== null) {
    rootNode = rootNode.left;
  }
  return rootNode.val;

}

function findMaxBST (rootNode) {
  // Your code here
  while (rootNode.right !== null) {
    rootNode = rootNode.right;
  }
  return rootNode.val;
}

function findMinBT (rootNode) {
  // Your code here
  if (rootNode === null) return;

  let minLeftValue = findMinBT(rootNode.left);
  let minRightValue = findMinBT(rootNode.right);

  let value = rootNode.val;

  if (minLeftValue < value) value = minLeftValue;
  if (minRightValue < value) value = minRightValue;

  return value;
}

function findMaxBT (rootNode) {
  // Your code here
  if (rootNode === null) return;

  let maxLeftValue = findMaxBT(rootNode.left);
  let maxRightValue = findMaxBT(rootNode.right);

  let maxValue = rootNode.val;

  if (maxLeftValue > maxValue) maxValue = maxLeftValue;
  if (maxRightValue > maxValue) maxValue = maxRightValue;

  return maxValue;
}

function getHeight (rootNode) {
  // Your code here
  if (rootNode === null) {
    return -1;
  }

  // Recursively calculate the height of the left and right subtrees
  let leftHeight = getHeight(rootNode.left);
  let rightHeight = getHeight(rootNode.right);

  // Return the maximum height of the left and right subtrees, add 1 for the current node
  return Math.max(leftHeight, rightHeight) + 1;
}

function balancedTree (rootNode) {
  // Your code here
  if (rootNode === null) return true;

  let leftTreeHight = getHeight(rootNode.left);
  let rightTreeHight = getHeight(rootNode.right);

  const hightDiff = Math.abs(leftTreeHight - rightTreeHight);

  if (hightDiff > 1) return false;

  return balancedTree(rootNode.left) && balancedTree(rootNode.right);
}

function countNodes (rootNode) {
  // Your code here
  if (rootNode === null) return 0;
  let nodeCounter = 1;

  let leftNodeCounter = countNodes(rootNode.left);
  let rightNodeCounter = countNodes(rootNode.right);

  return nodeCounter  + leftNodeCounter + rightNodeCounter;
}

function getParentNode (rootNode, target) {
  // Your code here
  console.log(rootNode);
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
