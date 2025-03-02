const fibonacci = function(val) {
    if(val < 0) return 'OOPS';
    val = Number(val);
    let f0 = 0;
    let f1 = 1;
    let f3 = 0;
    if(val == 0) return f0;
    if(val == 1) return f1;

    for(let i = 1; i < val; i++){
        f3 = f0 + f1;
        f0 = f1;
        f1 = f3;
    }
    return f1;
};



// Do not edit below this line
module.exports = fibonacci;
