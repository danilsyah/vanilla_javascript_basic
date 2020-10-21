function foo(x = 0){
    return x + 1;
}

console.log(foo(4));

// function expression
(function(x = 0){
    console.log(x + 1);
})(2);

((x) => console.log("hallo danil" , x +2))(3);

// arrow function
const tambah = (x = 0) => {
    return x + 1;
}
console.log(tambah(4));

// inner function , fungsi dalam fungsi
function addSquares(a, b){
    function square(x){
        return x * x;
    }
    return square(a) + square(b);
}
console.log(addSquares(3,2));

console.log("------------------");

// function recursive
function loop(x){
    if(x >= 10){
        return;
    }
    console.log(x);
    loop(x + 1);
}
loop(1);
