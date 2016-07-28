module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function(res, elem, arr){
        res.push(fn(elem));
        return res;
    },[]);
}