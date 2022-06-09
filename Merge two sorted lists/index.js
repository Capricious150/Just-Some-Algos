const list1 = []
const list2 = [0]
const list3 = [1,2,4]
const list4 = [1,3,4]

console.log(typeof(list3+list4))

var mergeTwoLists2 = function(list1, list2) {
    let newList = list1
    for (let i = 0; i < list2.length; i++) {
        list1.splice(0,0,list2[i])
    }
    return (newList.sort())
};

var mergeTwoLists = function(list1, list2) {
    if (list1 && list2){
        let list3 = list1.concat(list2).sort()
        return list3
    } else if (list1){
        return list1
    } else if (list2){
        return list2
    } else {
        return []
    }
    
};

console.log(mergeTwoLists(list1,list2))
console.log(mergeTwoLists(list2,list3))
console.log(mergeTwoLists(list3,list4))