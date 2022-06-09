function factorialize(num) {
    let array = []
    for (let i = 1; i <= num; i++) {
        array.push(i)
    }

    return array.reduce((a,b) => (a*b),1)
  }
  
  console.log(factorialize(5));