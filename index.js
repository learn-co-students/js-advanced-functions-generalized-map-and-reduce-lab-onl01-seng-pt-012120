function map(arr, fn) {
    let r = []
    for (let i = 0; i < arr.length; i++ ) {
        r.push(fn(arr[i]))
    }
    return r
}


function reduce(arr, fn, init){
    let result = (!!init) ? init : arr[0]
    let i = (!!init) ? 0 : 1
  
    for (; i < arr.length; i++) {
      result = fn(arr[i], result)
    }
  
    return result;
  }