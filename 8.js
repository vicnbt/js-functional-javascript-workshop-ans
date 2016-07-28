var slice = Array.prototype.slice

function logger(namespace) {
    function log(a){
        var r = slice.call(arguments);
        r.unshift(namespace);
        console.log.apply(console,r);
    }
    return log;
}

//var slice = Array.prototype.slice
//function logger(namespace) {
//    return function() {
//        console.log.apply(console, [namespace].concat(slice.call(arguments)))
//    }
//}
//module.exports = logger


module.exports = logger

