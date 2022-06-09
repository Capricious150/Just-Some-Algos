function destroyer(arr) {
    for (let i = 1; i < arguments.length; i++) {
        let escape = false;

        while (escape === false) {
            if (arr.indexOf(arguments[i]) != -1){
                arr.splice(arr.indexOf(arguments[i]), 1)
            } else {
                escape = true;
            }
        }       
    }
    console.log(arr)
    return(arr)
}
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);