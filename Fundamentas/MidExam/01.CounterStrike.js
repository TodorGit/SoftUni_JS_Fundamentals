function Cs(data){

    let energy = data.shift();
    let index = 0;
    let wins = 0;

while(data[index] !== 'End of battle'){

    let current = Number(data[index]);

    if(energy < current){
        console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
        energy-= current
        break;
    } else if(energy >= current) {
        energy -= current;
        wins++;
    }

    if(wins % 3 === 0){
        energy+= wins;
    }

    index++
}

if(energy >= 0){
console.log(`Won battles: ${wins}. Energy left: ${energy}`);
}

}

Cs(["200",
"54",
"14",
"28",
"13",
"End of battle"])

