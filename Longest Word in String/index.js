function findLongestWordLength(str) {
    
    let arrayString=str.split(' ')
    let answer = 0;
    for (let i = 0; i < arrayString.length; i++) {
        if (arrayString[i].length > answer){
            answer = arrayString[i].length
        }
    }
    return answer

  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));