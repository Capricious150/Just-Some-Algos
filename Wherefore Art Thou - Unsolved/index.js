function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
        for (let i = 0; i < collection.length; i++) {
            if (collection[i][Object.keys(source)] == Object.values(source))
            {
                arr.push(collection[i])
            }          
        }
    console.log(arr)
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });