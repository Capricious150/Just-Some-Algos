function diffArray(arr1, arr2) {
    const newArr = [...arr2];
    const arrObj = {}

    for (let i = 0; i < arr2.length; i++) {
        const element = arr2[i]
        arrObj[element] = element;
    }
    
    for (let i = 0; i < arr1.length; i++) {

        if (!arrObj[arr1[i]]){
            newArr.push(arr1[i])
        } else {
            newArr.splice(newArr.indexOf(arr1[i]),1)
        }
    }

    return newArr;
  }
  
  diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);