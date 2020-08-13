// Add your functions here
function map(sourceArray, func){
  let array = [];
  for(let i = 0; i < sourceArray.length; i++){
    array.push(func(sourceArray[i]))
  }
  return array
}

function reduce(sourceArray, func, i) {
  let value = (!!i) ? i : sourceArray[0]
  let start = (!!i) ? 0 : 1   
  for(; start < sourceArray.length; start++) {
       value = func(sourceArray[start], value)
  }
  return value
}