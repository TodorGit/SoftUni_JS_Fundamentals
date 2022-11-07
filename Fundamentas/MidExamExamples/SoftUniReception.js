function softUniReception(myArray){

    let students =Number(myArray[myArray.length - 1]);
    let hours = 0; 
    let stuPerHour = 0;
    let breakTime = 0;

for(let i = 0;i<myArray.length - 1;i++){
    stuPerHour+= Number(myArray[i]);
}

while(students > 0){
    students -= stuPerHour;
    hours++
    breakTime++

    if(breakTime === 3 ){
        hours++
        breakTime = 0
    }
}

console.log(`Time needed: ${hours}h.`);

}

softUniReception(['3','2','5','40']);