GRAPH + TREE TRAVERSALS
------------------------

1. BFS

a : best for finding shortest path

b : search left tree down to the bottom most left leaf, and then work your way back up to the root node
and then down the right tree to bottom leaf, and then work way up only stopping at unvisited nodes

c : requires more memory

d : dfs vs bfs

    //If you know a solution is not far from the root of the tree:
    BFS

    //If the tree is very deep and solutions are rare,
    BFS (DFS will take long time. )

    //If the tree is very wide:
    DFS (BFS will need too much memory)

    //If solutions are frequent but located deep in the tree
    DFS

    //determining whether a path exists between two nodes
    DFS

    //Finding the shortest path
    BFS

  e : example of : class binarySearchTree {
    constructor() {
      this.root = null;
    }
    insert(value){

    }
    lookup(value) {

    }
    remove(value){

    }

    // ITERATIVE BREADTH FIRST SEARCH
    function iterative_breadthFirstSearch(){
      let currentNode = this.root
      let list = []
      let queue = [];
      queue.push(currentNode);

      while(queue.length > 0) {
        currentNode = queue.shift() // remove first item from stack/queue ds
        console.log(currentNode)
        list.push(currentNode.value);
        if ( currentNode.left ) {
          queue.push(currentNode.left);
        }
        if (currentNode.right) {
          queue.push(currentNode.right);
        }
      }
      return list;
    }
  }



  const tree = new binarySearchTree();
  tree.insert(9)



2. DFS

( follows one branch until the last node in the branch is reached )
