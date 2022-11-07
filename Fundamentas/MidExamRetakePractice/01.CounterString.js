function strike(data){

    let health = Number(data.shift());
    let won = 0;

    for(element of data){
        if(element === 'End of battle' || health <= 0){
            break;
        }
        let cur = Number(element);
        
        if(health <= cur){
            console.log(`Not enough energy! Game ends with ${won} won battles and ${health} energy`);
            health-= cur
            break;
        } else if(health >= cur) {
            health -= cur;
            won++;
        }

        if(won % 3 === 0){
            health+= Number(won);
        }

    }

    if(health> 0){    
        console.log(`Won battles: ${won}. Energy left: ${health}`);

}
   


}

strike(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])

// strike(["200",
// "54",
// "14",
// "28",
// "13",
// "End of battle"])

