
const breadthFirstIterate = function(root){
    // If root is null return empty array
    if (root === null) return []
    const result = []
    // BreadFirst uses a queue instead of a stack, where the first element in is also the first element out (FIFO)
    // We initialize with root stored. Once the queue is empty,the function will return
    const queue = [ root ]

    while (queue.length > 0){
        // Because we're FIFO, we shift the first element out of the queue, since it went in first.
        let current = queue.shift
        // When an element is removed from the queue, we add it to the end of the result array.
        result.push(current.val)

        // If a left/right child exists, add it to the queue. We're traversing left-to-right, so
        // Add the left child first.
        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)
    }

    return result
}