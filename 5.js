function countArr(testUsers) {
    var rez;
    //testUsers.unshift('hack');
    testUsers.reduce(function (sum, current) {
        if (typeof(sum) == "string") {
            var tmp = sum;
            sum = {};
            sum[tmp]=1;
            tmp=null;
        }
        if (typeof(sum[current])!="undefined") {
            sum[current]++;
        } else {
            sum[current] = 1;
        }
        rez = sum;
        return sum;
    });
    return rez;
}


//function countWords(arr) {
//    return arr.reduce(function(countMap, word) {
//        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
//        return countMap
//    }, {}) // second argument to reduce initialises countMap to {}
//}



module.exports = countArr;
