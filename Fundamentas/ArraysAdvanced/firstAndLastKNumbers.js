function firstAndLastKNum(nums){

let k = nums.shift();
let firstK = nums.slice(0,k);
let lastK = nums.slice(-k);
console.log(firstK.join(" "));
console.log(lastK.join(" "));



}

firstAndLastKNum([2 ,7, 8, 9]);