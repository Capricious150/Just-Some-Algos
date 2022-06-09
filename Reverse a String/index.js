function reverseString(str) {
    
    let oldString = str.split('')
    let newString = []

    for (let i = 0; i < str.length; i++) {
        newString.push(oldString.pop())
    }
    let answer = newString.join('')
    return answer
  }
  
  console.log(reverseString("hello"));