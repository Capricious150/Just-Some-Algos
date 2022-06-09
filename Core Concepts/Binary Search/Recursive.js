
const recursiveBinary = (array, target, start, end) => {

    // Base Case: If the starting pointer is ever greater than our ending pointer, the target wasn't found.
    // Return false
    if (start > end){
        return false
    }

    // Find the middle index between start and end as an integer.
    let mid = Math.floor((start+end)/2)

    // If the value of our array at index position mid equals the target, return true
    if (array[mid] === target) return true;

    // If the value of our array at index position mid is greater than our target,
    // Run this function again, but with the "end" argument equaling mid - 1
    if (arr[mid] > x){
        return recursiveBinary(array, target, start, mid-1);
    } 
    
    // And if the value of our array at index position mid is less than our target,
    // Run this function again, but with the "start" argument equaling mid + 1
    else if (arr[mid] < x){
        return recursiveBinary(array, target, mid+1, end);
    }
}