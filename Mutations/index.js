function mutation(arr) {
    const lowerString1 = arr[0].toLowerCase().split('')
    const lowerString2 = arr[1].toLowerCase().split('')
    for (let i = 0; i < lowerString2.length; i++) {
        if (lowerString1.indexOf(lowerString2[i]) === -1){
            return false
        }
    }
    return true
  }
  
  console.log(mutation(["hello", "hey"]));