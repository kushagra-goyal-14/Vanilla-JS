let arr = [[1,4,7,4],[[[2,3]]],7,[4,3,7]];
console.log(arr);


let temp = arr.toString().split(",").map((x)=>Number(x));

console.log(temp);