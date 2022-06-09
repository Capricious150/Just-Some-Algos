
const depthFirstRecursive = function(root){
    // If root is null, return empty array
    if (root === null){
        return []
    }

    // Recursive function call against both child nodes
    const leftVals = depthFirstRecursive(root.left);
    const rightVals = depthFirstRecursive(root.right);

    // Return an array. It will have [root, rootOfLeftChild(n...), rootOfRightChild(n...)]
    return [root.val, ...leftVals, ...rightVals]
}