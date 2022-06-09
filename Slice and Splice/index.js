function frankenSplice(arr1, arr2, n) {
    let answerArray = [...arr2]
    let spliceAnswers = [...arr1]
    answerArray.splice(n,0, ...spliceAnswers)
    console.log(arr1, arr2)
    return answerArray
}  
  console.log(frankenSplice([1, 2, 3], [4, 5], 1));