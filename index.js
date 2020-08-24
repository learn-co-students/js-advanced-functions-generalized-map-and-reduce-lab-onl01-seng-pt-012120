function map(a, f) {
    return a.map(n => f(n));
}

function reduce(a, f, s=0) {
    let r;
    if (f(s, s) === false || f(s, s) === true) {r = true} else {r = s};
    a.forEach(n => 
        {r = f(n, r)}
    );
    return r
}