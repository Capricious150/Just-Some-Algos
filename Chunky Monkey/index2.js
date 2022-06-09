function chunkArrayInGroups(arr, size) {
    let finalArray = []
    
    let i = 0;

    while (i < arr.length) {
        finalArray.push(arr.slice(i, i+size));
        i += size
    }
    
    console.log(finalArray)
    return finalArray
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)