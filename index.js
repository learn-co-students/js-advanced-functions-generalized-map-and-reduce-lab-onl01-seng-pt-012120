// Add your functions here
//map receives an array and a block of code as parameters
//then set a variable storing an empty array
//next we set an loop system to iterate over every element in the array
function map(src, cb) {
    let r = []
  
    for (let i = 0; i < src.length; i++) {
      let theElement = src[i]
      r.push(cb(theElement))
    }
  
    return r;
  }
  
  //reduce takes an array, a block of code, and a starting point
  function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }