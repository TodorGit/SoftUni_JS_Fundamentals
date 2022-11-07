function counterStrike(arr) {

    let energy = arr.shift();
    let wins = 0;
    let index = 0;

    while (arr[index] != 'End of battle') {
        let currentNum = Number(arr[index]);

        if (energy < currentNum) {              
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);   
            energy -= currentNum;
            break;
        } else if (energy >= currentNum) {
            energy -= currentNum;
            wins++
        }

        if (wins % 3 === 0) {
            energy += wins
        }

        index++
    }

    if (energy>=0) {
        console.log(`Won battles: ${wins}. Energy left: ${energy}`);
    } 

 

}

counterStrike(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"]);

