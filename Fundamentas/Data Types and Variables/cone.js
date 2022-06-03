function cone(radius, height){

let volume = ((Math.PI * Math.pow(radius, 2) * height) / 3).toFixed(4);
let sHeight = Math.sqrt(Math.pow(radius,2) + Math.pow(height, 2));
let area = (Math.PI * radius * sHeight + Math.PI * Math.pow(radius, 2)).toFixed(4);


console.log(`volume = ${volume}`);
console.log(`area = ${area}`);
}

cone(3,5)