// methods / ways of traversing a tree

// inorder traversal

function traversalInOrder(node, list) {
  console.log(node.value);
  if(node.left) {
    traversalInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right){
    traversalInOrder(node.right, list);
  }
  return list;
}

// preorder traversal


// postorder traversal
