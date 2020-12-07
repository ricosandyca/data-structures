function Node(data, left = null, right = null) {
  this.data = data
  this.left = left
  this.right = right
}

// root -> left -> right
function preorder(node) {
  if (!node) return
  console.log(node.data)
  preorder(node.left)
  preorder(node.right)
}

// left -> root -> right
function inorder(node) {
  if (!node) return
  inorder(node.left)
  console.log(node.data)
  inorder(node.right)
}

// left -> right -> root
function postorder(node) {
  if (!node) return
  postorder(node.left)
  postorder(node.right)
  console.log(node.data)
}

/**
 *            1
 *          /   \
 *        2       3
 *      /   \
 *    4       5
 */
const tree = new Node(1)

tree.left = new Node(2)
tree.left.left = new Node(4)
tree.left.right = new Node(5)

tree.right = new Node(3)

console.log('--- preorder ---')
preorder(tree)

console.log('--- inorder ----')
inorder(tree)

console.log('--- postorder ---')
postorder(tree)