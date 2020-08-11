// Add your functions here
function map(arr, fn) {
  let result = [];
  for (const num of arr) {
    result.push(fn(num))
  }
  return result;
}

function reduce(arr, fn, starting) {
  // result is set to starting point if provided
  // else set result to first element
  let result = (!!starting) ? starting : arr[0]
  // if starting is provided begin on first arr member
  // else provided start on second arr member
  // (because first would already be assigned to result above)
  let i = (!!starting) ? 0 : 1

  // iterate
  for (;i < arr.length; i++) {
    result = fn(arr[i], result)
  }
  // return result
  return result
}