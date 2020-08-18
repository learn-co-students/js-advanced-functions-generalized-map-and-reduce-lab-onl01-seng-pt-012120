// Add your functions here
let map = (array,func) => {
    return func(array);
};

let reduce = (array,startVal=0) => {
    let returnVal = startVal;
    array.forEach(item => {
        returnVal += item;
    });
    return returnVal;
};