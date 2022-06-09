function confirmEnding(str, target) {
    console.log(str.length)
    console.log(str[str.length-target.length])

    let substring = str.substr((str.length-target.length), (target.length))
    if (substring === target){
        return true
    } else {
        return false
    }
  }
  
  confirmEnding("Bastian", "n");