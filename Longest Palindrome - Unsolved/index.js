
var longestPalindrome = function(s) {
    let safetyString = s
    return safetyString.split('').reverse()
};

console.log(longestPalindrome("strung"))