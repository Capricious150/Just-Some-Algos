const str1 = "ABCD"
const str2 = "EFGH"
const str3 = "Hello"
const str4 = "ECHO"

function uniqueChecker(string1,string2){


    const formatString1 = string1.toLowerCase()
    const formatString2 = string2.toLowerCase()

    const uniqueChars = [...new Set(formatString1)];
    const uniqueChars2 = [...new Set(formatString2)];

    const combinedStrings = uniqueChars.concat(uniqueChars2)
    const sortedString = combinedStrings.sort()


    let prevChar
    for (let i = 0; i < sortedString.length; i++) {
    
        if (i == 0){
            prevChar = sortedString[i]
        }

        if (i > 0){
            if (sortedString[i] === prevChar){
                console.log(true)
                break
            }
            else if (i === (sortedString.length - 1) && (prevChar !== sortedString[i])) {
                console.log(false)
            }
            else {
                prevChar = sortedString[i]
            }
        }                
    }
}    

uniqueChecker(str1,str2);
// logs false

uniqueChecker(str3,str4);
// logs true