function blackFlag(data){

    let daysOfPlunder = Number(data[0]);
    let dailyPlunder = Number(data[1]);
    let expectedPlunder = Number(data[2]);

    let totalPlunder = 0;

    for(let i = 1; i < daysOfPlunder + 1;i++){
        totalPlunder+= dailyPlunder;

        if(i % 3 === 0 && i > 0){
            totalPlunder+= dailyPlunder/2;
        }

        if(i % 5 === 0 && i > 0){
            totalPlunder-= totalPlunder * 0.3;
        }
    }
       let percentage = totalPlunder / expectedPlunder * 100; 
    if(totalPlunder >= expectedPlunder){
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else{
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }

   


}

blackFlag(["10",
"20",
"380"])
;