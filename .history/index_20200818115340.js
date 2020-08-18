// Add your functions here
const map = (array,func) => {
    let newA = [];
    array.forEach(item => {
        newA.push(func(item));
    });
    return newA;
};

const reduce = (array,func,startVal=0) => {
    array.forEach(item => {
        func(item,startVal);
    });
    return returnVal;
};