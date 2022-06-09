function titleCase(str) {
    let lowerCase = str.toLowerCase()
    let stringArray = lowerCase.split(' ')
    let answerString = ""
    for (let i = 0; i < stringArray.length; i++) {
        let thisGuy = stringArray[i].replace(stringArray[i].charAt(0), stringArray[i].charAt(0).toUpperCase())
        console.log(thisGuy)
        if (answerString === ""){
            answerString = `${thisGuy}`
        } else {
            answerString = `${answerString} ${thisGuy}`
        }
    }
    return answerString
  }
  
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));