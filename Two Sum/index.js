
var twoSum = function(nums, target) {
    // Create an object to store numbers we've already iterated though.
    // Make it an object so we can quickly check for existing keyvalues
    let previousNumbers = {};
    // Iterate through array
    for (let i = 0; i < nums.length; i++) {
        
        // Keep track of the value of the number at the current index position
        currentNumber = nums[i];

        // Keep track of the number which we would need to find that adds with the previous number to reach
        // the target
        neededNumber = target - currentNumber;

        // Check our previousNumbers object for a key that equals the needed number.
        const i2 = previousNumbers[neededNumber];

            // If we find it, return its value alongwith the current index position of the for loop
            // We return the index from "previousNumbers" first because it will definitely be earlier in the
            // array than our current number
            if (i2 != null){
                return [i2,i]   
            } 
            // If we didn't find a key that matches our needed number, store the number we just were on as 
            // a key in previousNumbers, with a value equal to the index position we were at when we stored it
            else {
            previousNumbers[currentNumber] = i
            }
    }
};

console.log(twoSum([1,3,5], 6));
console.log(twoSum([1,2,4,5,9], 7));