// Add your functions here
let map = (array,func) => {
    let newA = [];
    array.forEach(item => {
        newA.push(func(item));
    });
    return newA;
};

let reduce = (array,func,startVal=0) => {
    let returnVal = startVal;
    array.forEach(item => {

        returnVal += func(item);
    });
    debugger;
    return returnVal;
};