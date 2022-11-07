function strOcc(str, word){

let texArr = str.split(' ');
let count = texArr.filter(x => x === word).length
console.log(count);
}

strOcc('This is a word and it also is a sentence',
'is')