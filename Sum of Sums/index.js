function sumAll(arr) {
    
    if (arr[0] > arr[1]){
        arr.push(arr.shift());
    }
    
    let answer = 0;
    for (let i = arr[0]; i < arr[1]; i++) {
        answer += (i+1)
    }
    answer = answer + arr[0]
    return answer
  }
  
  sumAll([1, 4]);