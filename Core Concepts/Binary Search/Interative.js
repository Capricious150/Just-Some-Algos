const interativeBinary = (array, target) => {
    let start = 0;
    let end = array.length - 1;

    while (start <= end){

        // Find the index in the middle of the start & end indexes. 
        // Use Math.floor(Y/2) instead of Y/2 because we need an integer, which Math.floor gives us (rounding down)
        let mid = Math.floor((start + end)/2);

        // If the value of the index repesented by mid equals the target, we've found what we're searching for
        // In this case, return true, indicating the target exists in the array.
        if (arr[mid] === target){
            return true;
        } 
        
        // If the value of mid is less than the target, move start to the index after mid, because 
        // the target definitely isn't somewhere where mid is lower
        else if (arr[mid] < target){
            start = mid + 1;
        } 
        
        // Similarly, if the value of mid is greater than the target, move end to the index before mid,
        // because the target definitely isn't somewhere where mid is higher
        else {
            end = mid - 1;
        }
    }
    // If we ever reach a point where our start variable is after our end variable, the target doesn't exist
    // in the array. In this case, we're returning false to indicate such. 
    return false
}