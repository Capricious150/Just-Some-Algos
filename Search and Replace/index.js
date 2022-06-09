function myReplace(str, target, value) {
    
    let targetUpper = false;
    let valueUpper = false;
    const string = str;
    let answer = "";

    if (target[0] === target[0].toUpperCase()){
        targetUpper = true;
    }

    if (value[0] === value[0].toUpperCase()){
        valueUpper = true;
    }

    if (targetUpper === valueUpper){
        answer = string.replaceAll(target, value)
        return answer
    } else if ((targetUpper === true) && (valueUpper === false)){
        let firstChar = value[0]
        let valueWord = value.split("")
        valueWord.shift()
        valueWord.unshift(firstChar.toUpperCase())
        let answerWord = valueWord.join("")
        let answer = string.replaceAll(target, answerWord)
        return answer
    } else {
        let firstChar = value[0]
        let valueWord = value.split("")
        valueWord.shift()
        valueWord.unshift(firstChar.toLowerCase())
        let answerWord = valueWord.join("")
        let answer = string.replaceAll(target, answerWord)
        return answer
    }
  }

  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped"));


//   function testUpper(str){
//       console.log(str[0])
//       console.log(str[0] === str[0].toUpperCase())
//       let string = "";
//       const stringArray = str.split("")
//       if(str[0] !== str[0].toUpperCase()){
//           let firstChar = stringArray[0].toUpperCase()
//           stringArray.shift()
//           stringArray.unshift(firstChar);
//           string = stringArray.join("")
//       } else {
//           string = str
//       }
//       console.log(stringArray)
//       console.log(string)
//   }

//   testUpper("cat")
//   testUpper("Dog")