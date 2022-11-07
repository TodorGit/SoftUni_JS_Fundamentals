function blackFire(data){

    let days = +data.shift();
    let dailyPlunder = +data.shift();
    let expectedPlunder = +data.shift();
    let totalPlunder = 0;

    for(let i = 1; i <= days; i++){

        totalPlunder+= dailyPlunder;

        if(i % 3 === 0){
            totalPlunder += (dailyPlunder * 0.5)
        }

        if(i % 5 === 0){
            totalPlunder -= (totalPlunder * 0.3)
        }
    }
    

    let percentage = totalPlunder / expectedPlunder * 100; 

    if(totalPlunder >= expectedPlunder){
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }


}

blackFire(["5",
"40",
"100"])

blackFire(["10",
"20",
"380"])


