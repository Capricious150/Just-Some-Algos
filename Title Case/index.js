function titleCase(str) {
    let lowerCase = str.toLowerCase()
    let stringArray = lowerCase.split(' ')
    let answerString = ""
    for (let i = 0; i < stringArray.length; i++) {
        let subArray = (stringArray[i].split(''))
        let capital = subArray[0].toUpperCase()
        subArray.shift()
        subArray.unshift(capital)
        let subAnswer = subArray.join('')
        if (answerString === ""){
            answerString = `${subAnswer}`
        } else {
            answerString = `${answerString} ${subAnswer}`
        }
    }
    return answerString
  }
  
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));