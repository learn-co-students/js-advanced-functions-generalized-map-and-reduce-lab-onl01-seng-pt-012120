// Add your functions here

// 1) my own map-like methods
// map returns an array with all val


// function makeListNegative(array) {
//     return array.map(x => x * -1);
//   }
  
//   var negativeList = makeListNegative([7, 2, 3, 4]);
  
//   console.log(negativeList);


const map = function(arr, fn) {
    let r = [];
    for( let element of arr ) {
      r.push(fn(element));
    }
    return r;
  }
  
  function reduce(arr, fn, base) {
      let total
      let i = 0
  
      if (base) {
          total = base
      } else {
          total = arr[0]
          i++
      }
  
      for (i; i < arr.length; i++) {
          total = fn(arr[i], total)
      }
      return total
  }