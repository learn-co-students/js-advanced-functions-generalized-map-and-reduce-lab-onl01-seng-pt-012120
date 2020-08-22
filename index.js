function map(array, callback) {
  let newArray = []
  for(let i =0; i< array.length; i++) {
      newArray.push(callback(array[i]))
  }
  return newArray
}

function reduce(arr, callback, start) {
  let x = !!start ? start : arr[0]
  let i = !!start ? 0 : 1 //starting at 1 because if start is false, we start at the first element in the array.
  
  for(i; i< arr.length; i++) {
     
      x = callback(arr[i], x)
      
  }
  return x
}