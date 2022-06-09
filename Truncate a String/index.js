function truncateString(str, num) {
    let answer = ""
    
    if (str.length > num){
        answer = `${str.slice(0, num)}...`
    } else {
        answer = str
    }

    return answer
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));