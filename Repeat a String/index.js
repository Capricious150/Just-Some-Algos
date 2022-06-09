function repeatStringNumTimes(str, num) {
    let answer = ""
    if (num > 0){
        for (let i = 0; i < num; i++) {
            answer = answer.concat(str)   
        }
    }
    return answer
  }
  
  console.log(repeatStringNumTimes("abc", 3));