function map(array, call) {
    let a = []
  
    for (let i = 0; i < array.length; i++) {
      let elem =array[i]
      a.push(call(elem))
    }
  
    return a;
  }
  
  function reduce(array, call, start){
    let a = (!!start ? start : array[0])
    let i = (!!start ? 0 : 1)
  
    for (; i < array.length; i++) {
      a = call(array[i], a)
    }
  
    return a;
  }