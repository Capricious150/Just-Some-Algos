//  @param {number[][]} accounts
//  @return {number}

 
 var maximumWealth = function(accounts) {
    let highestWealth = 0;
    for (let index = 0; index < accounts.length; index++) {
        
        var sum = accounts[i].reduce(function (a,b){
            return a + b;
        }, 0)

        if (sum > highestWealth){
            highestWealth = sum
        };
    }
    return highestWealth
};