function blackFlag(data){

    let plunderDays = Number(data.shift());
    let dailyPlunder = Number(data.shift());
    let expectedPlunder = Number(data.shift());
    let index = 1;
    let totalPlunder = 0;

    while(index <= plunderDays){

        
        totalPlunder+= dailyPlunder;

        if(index % 3 === 0){
            let additionalPlunder = dailyPlunder * 0.50;
            totalPlunder += additionalPlunder;
        }

        if(index % 5 === 0){
            let lostPlunder = totalPlunder * 0.30; 
            totalPlunder -= lostPlunder;
        }

        index++
    }


    if(totalPlunder >= expectedPlunder){
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else{
        let percentage = totalPlunder/expectedPlunder * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["10",
"20",
"380"])

