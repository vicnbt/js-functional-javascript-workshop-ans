function run(func,n){
    while(n>0){
        n--;
        func();
    }
}
module.exports = run;