function MuOnline(data){
    
    let arr = data.split('|');
    let bitcoins = 0;
    let wins = 0;
    let health = 100;

    for(let el of arr){
        let [command, value] = el.split(' ');
        

        if(command === 'potion'){
            let currentHealth = health;
            let healed = 0;
            if(currentHealth + Number(value) >= 100){
                healed = 100 - currentHealth
            } else if(currentHealth + Number(value) < 100){
                healed = value
            }
            wins++
            health+= Number(value);
            if(health > 100){
                health = 100;
            }
            console.log(`You healed for ${healed} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if(command === 'chest'){
            bitcoins+= Number(value); 
            wins++
            console.log(`You found ${value} bitcoins.`);
        }
        else {
            health-= Number(value);
            if(health > 0){
                wins++
                console.log(`You slayed ${command}.`);
            } else{
                wins++
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${wins}`);
                break;
            }
        }
    }

    if(health > 0){
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }

}

MuOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
console.log("--------------------------------------------");
MuOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')