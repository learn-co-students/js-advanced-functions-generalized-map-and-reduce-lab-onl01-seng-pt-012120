// Add your functions here
function map(arr,func){
  let newArr = [];
  for(let i = 0;i < arr.length;i++){
    newArr.push(func(arr[i]));
  }
  return newArr;
}

function reduce(arr,func,n = 0){
  if (arr.every(function(e){ return typeof e === "number"})){
    for(let i = 0;i<arr.length;i++){
      n += func(arr[i],0);
    }
    return n;
  }
  else if(arr.every(function(e){return typeof e != "string"})){
    for (let i = 0; i < arr.length; i++){
      return func(arr[i],true);
    }
  }
  else{
    if (arr.every(function(e){return !!e === true})){
      return true
    }
    else{
      return false;
    }

  }
}
