function reception(data){

let firstEmpl = Number(data.shift())
let secondEmpl = Number(data.shift())
let thirdEmpl = Number(data.shift())
let sumOfEmpl = firstEmpl + secondEmpl + thirdEmpl;
let students = Number(data.shift())
let hours = 0;

while(students > 0){

    students -= sumOfEmpl;
    hours++;
    if(hours % 4 === 0){
        hours++
    }

}

console.log(`Time needed: ${hours}h.`);

}

reception(['5','6','4','20']);
reception(['1','2','3','45'])
reception(['3','2','5','40'])