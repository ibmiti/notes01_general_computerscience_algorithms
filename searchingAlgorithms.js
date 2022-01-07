// DFS
// nLR => Pre order traversal :
function traversePreOrder(node, list){
    console.log(node.value)
    list.push(node.value) // this is the Preorder step 
    if (node.left)  { traversePreOrder(node.left, list) }
    if (node.right) { traversePreOrder(node.right, list) }
    return list;
}

// LnR => inorder traversal, we act after the first full branch traversal, then right
function traverseInOrder(node, list){
    console.log(node.value)
    if (node.left){ traverseInOrder(node.left, list) }
    list.push(node.value) // this is the inorder method 
    if (node.right){ traverseInOrder(node.right, list) }
    return list;
}

// LRn postorder traversal, we act last. 
function postorderTraversal(node,list){
    console.log(node.value)
    if(node.left){ postorderTraversal(node.left, list) }
    if(node.right){ postorderTraversal(node.left, list) }
    list.push(node.value)
    return list;
}

