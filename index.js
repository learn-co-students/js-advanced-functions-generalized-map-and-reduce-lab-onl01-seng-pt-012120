function map(arr, fn) {
    let r = []
    for (let i = 0; i < arr.length; i++ ) {
        r.push(fn(arr[i]))
    }
    return r
}


function reduce(arr, fn, init) {
    let result = (!!init ? init : 0)
    for (let i=0; i < arr.length; i++) {
        result = arr[i]
    };
    return result
}