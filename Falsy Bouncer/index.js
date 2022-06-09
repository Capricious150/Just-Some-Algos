function bouncer(arr) {
    let answerArray = [];
    for (let i = 0; i < arr.length; i++) {
        if(Boolean(arr[i]) == true){
            answerArray.push(arr[i])
        }
    }
    console.log(answerArray)
    return answerArray
  }
  
  bouncer([7, "ate", "", false, 9]);
  bouncer([false, null, 0, NaN, undefined, ""])