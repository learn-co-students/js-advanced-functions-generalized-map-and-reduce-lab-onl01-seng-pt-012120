// map returns an array with all values made negative
// Add your functions here
// function mapToNegativize(src) {
//     let r = []
//     for (let i = 0; i < src.length; i++ ) {
//       r.push(-1 * src[i]) // Unique work
//     }
//     return r
//   }

// map returns an array with the original values
// function mapToNoChange(arr){
//     let result = [];
//     for (let i=0; i < arr.length; i++) {
//         result.push(arr[i])
//     };
//     return result
// }

// map returns an array with the original values multiplied by 2
// function mapToDouble(arr){
//     let result = [];
//     for (let i=0; i < arr.length; i++) {
//         result.push(arr[i] * 2)
//     };
//     return result
// }

// map returns an array with the original values squared
// function mapToSquare(arr){
//     let result = [];
//     for (let i=0; i < arr.length; i++) {
//         result.push(arr[i] ** 2)
//     };
//     return result
// }



// map returns an array with all values made negative
// map returns an array with the original values
// map returns an array with the original values multiplied by 2
// map returns an array with the original values squared

function map(arr, fn) {
    let r = []
    for (let i = 0; i < arr.length; i++ ) {
        r.push(fn(arr[i]))
    }
    return r
}

// reduce returns a running total when not given a starting point
// reduce returns a running total when given a starting point
// function reduceToTotal(arr, init = 0) {
//     let result = init;
//     for (let i=0; i < arr.length; i++) {
//         result = result + arr[i]
//     };
//     return result
// }

// reduceToAllTrue returns true when all values are truthy
// reduceToAllTrue returns false when any value is falsy
// function reduceToAllTrue(arr) {
//     for (let i=0; i < arr.length; i++) {
//        if (!arr[i]) return false
//     }
//     return true
// }

// reduceToAnyTrue returns true when a true value is present
// reduceToAnyTrue returns false when no true value is present
// function reduceToAnyTrue(arr) {
//     for (let i=0; i < arr.length; i++) {
//         if (arr[i]) return true
//      }
//      return false
// }



// reduce returns a running total when not given a starting point
// reduce returns a running total when given a starting point
// reduce returns true when all values are true
// reduce returns false when any value is false
// reduce returns true when a true value is present
// reduce returns false when no true value is present

function reduce(arr, fn, init){
    let result = (!!init) ? init : arr[0]
    let i = (!!init) ? 0 : 1
  
    for (; i < arr.length; i++) {
      result = fn(arr[i], result)
    }
  
    return result;
  }