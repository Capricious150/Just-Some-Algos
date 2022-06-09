function largestOfFour(arr) {
    let answerArray = []
    for (let i = 0; i < arr.length; i++) {
        answerArray.push(arr[i].reduce((a,b) => {
            if (b > a){
                return b
            } else {
                return a
            }
        }, arr[i][0]))
    }

    return answerArray
}    
  
  console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));