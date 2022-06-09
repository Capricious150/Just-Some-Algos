function getIndexToIns(arr, num) {
    function compare(a,b){
        return a-b
    }
    let answerArray = [...arr].sort(compare)
    answerArray.push(num)
    let finalAnswer = [...answerArray].sort(compare)
    return finalAnswer.indexOf(num)
  }
  
  getIndexToIns([3, 10, 5], 3);