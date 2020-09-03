function map(array, callback) {
    return array.map(x => callback(x))
};

function reduce(array, callback, start) {
    if (start) {
        return array.reduce(function(allValues, value) {
            return callback(allValues, value)
        }, start)
    }
    else {
        return array.reduce(function(allValues, value) {
            return callback(allValues, value)
        })
    };
};