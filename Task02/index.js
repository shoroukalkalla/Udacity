const first = require("./utilities/first.js");
const { lgNum, cut3 } = require("./utilities/second.js");

const numArr = [1, 2, 3];
const strArr = ["a", "b", "c"];

console.log(first.sum(numArr));
console.log(first.concat(numArr, strArr));

console.log(lgNum(numArr));
console.log(cut3(strArr));
