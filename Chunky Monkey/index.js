function chunkArrayInGroups(arr, size) {
    let finalArray = []
    let subArray = []

    for (let i = 0; i < arr.length; i++) {
        if ((subArray.length < size) && (i < arr.length - 1 )){
            subArray.push(arr[i])
        } else if ((subArray.length === size) && (i < arr.length - 1)){
            finalArray.push(subArray)
            subArray = []
            subArray.push(arr[i])
            console.log("Size Met")
        } else if (i == (arr.length - 1) && (subArray.length === size)){
            finalArray.push(subArray)
            subArray = []
            subArray.push(arr[i])
            finalArray.push(subArray)
            console.log("Size met on final loop")
        } else {
            subArray.push(arr[i])
            finalArray.push(subArray)
            console.log("Final loop")
        }
        
    }
    console.log(finalArray)
    return finalArray
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)