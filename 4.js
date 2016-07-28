function checkUsersValid(goodUsers) {
    return function(testUsers){
        return testUsers.every(function(item){
            var rez1 = goodUsers.some(function(item2){
                var rez2 = item2.id==item.id;
                return rez2;
            });
            return rez1;
        });
    }
}

//var testAllValid = checkUsersValid([{id:1},{id:2},{id:3}]);
//console.log(testAllValid([{id:1},{id:4}]));

module.exports = checkUsersValid;
