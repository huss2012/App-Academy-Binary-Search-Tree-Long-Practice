// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
// Do not change this
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        // Your code here
        this.root = null;
    }

    insert(val, currentNode = this.root) {
        // Your code here
        let newNode = new TreeNode(val);
        //Check if the tree is empty: In case the tree is empty.
        if (currentNode === null) return this.root = newNode;
        //In case the inseted value is smaller then the root node value:
        if (val < currentNode.val) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
            } else {
                this.insert(val, currentNode.left);
            }
        }
        //In case the inserted value is larger then the root node value:
        if (val > currentNode.val) {
            if (currentNode.right === null) {
                currentNode.right = newNode;
            } else {
                this.insert(val, currentNode.right);
            }
        }
    }

    search(val) {
        // Your code here
        let currentNode = this.root;

        while (currentNode !== null) {

            if (val === currentNode.val) return true;

            if (val < currentNode.val) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        return false;
    }


    preOrderTraversal(currentNode = this.root) {
        // Your code here
        if (currentNode === null) return;
        console.log(currentNode.val);
        this.preOrderTraversal(currentNode.left);
        this.preOrderTraversal(currentNode.right);
    }


    inOrderTraversal(currentNode = this.root) {
        // Your code here
        if (currentNode === null) return;
        this.inOrderTraversal(currentNode.left);
        console.log(currentNode.val);
        this.inOrderTraversal(currentNode.right);
    }


    postOrderTraversal(currentNode = this.root) {
        // Your code here
        if (currentNode === null) return;
        this.postOrderTraversal(currentNode.left);
        this.postOrderTraversal(currentNode.right);
        console.log(currentNode.val);
    }

    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
        // your code here
        // initialize a queue with the root node

        // while the queue is not empty
        // print and remove first node in queue

        // if the node has a left node
        // push the left node on the back of the queue
        // if the node has a right node
        // push the right node on the back of the queue
        let queue = [];
        queue.push(this.root);

        while (queue.length > 0) {
            let node = queue.shift();
            console.log(node.val);

            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
        // your code here
        // initialize a stack with the root node

        // while the stack is not empty
        // print and remove first node in stack

        // if the node has a left node
        // push the left node on the back of the stack
        // if the node has a right node
        // push the right node on the back of the stack
        let stack = [];
        stack.push(this.root)

        while (stack.length > 0) {
            let node = stack.pop()
            console.log(node.val);

            if (node.left !== null) {
                stack.push(node.left);
            }
            if (node.right !== null) {
                stack.push(node.right);
            }
        }
    }
}

module.exports = { BinarySearchTree, TreeNode };
