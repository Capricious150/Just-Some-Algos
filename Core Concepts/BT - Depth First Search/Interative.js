const depthFirst = function(root){
    // Case: NULL Root, return empty array
    if(root === null){
        return []
    }

    const result = [];
    
    // Initialize stack. When stack is empty, function will return its answer
    // Stack is First In, Last Out (FILO).
    const stack = [ root ]

    // While loop to iterate through tree. As above, once stack empty, return
    while(stack.length > 0){
        
        // Remove final element from stack, add it to result array
        const current = stack.pop;
        result.push(current.val)

        // Add right/left child nodes exist, add them to the stack. We're traversing left first,
        // So we add the right-hand child first because last in is first out
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }

    return result
}