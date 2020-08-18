// Add your functions here
const map = (array,func) => {
    let newA = [];
    array.forEach(item => {
        newA.push(func(item));
    });
    return newA;
};

const reduce = (array,func,startVal=0) => {
    let reduced = startVal;
    array.forEach(item => {
        if (typeof(item)==='number') {
            reduced += item;
        }else{
            reduced = func(item,reduced);
        };
    });
    return reduced;
};