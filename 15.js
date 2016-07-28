function getDependencies(tree, result) {
    var result = result || [];
    if(!tree.dependencies) return [];

    var deps = tree.dependencies || {};

    Object.keys(deps).forEach(function(dep) {
        var depStr = dep + "@" + deps[dep].version;

        if(result.indexOf(depStr) < 0) {
            result.push(depStr);
        }

        getDependencies(deps[dep], result);
    })

    return result.sort();

}

module.exports = getDependencies
//repeat