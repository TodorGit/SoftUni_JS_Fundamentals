function MuOn(data){

    let health = 100; 
    let btc = 0;
    let input = data.split('|');
    let counter = 0;

    for(let element of input){

        if(health <=0){
            break;
        }

        let [command, value] = element.split(' ');


        switch(command){
            case 'potion':
                counter++
                let currentHealth = health;
                let healed = 0;
                if(currentHealth + Number(value) >= 100){
                    healed = 100 - currentHealth
                } else if(currentHealth + Number(value) < 100){
                    healed = value
                }
                health+= Number(value);
                if(health > 100){
                    health = 100;
                }
                console.log(`You healed for ${healed} hp.`);
                console.log(`Current health: ${health} hp.`); break;
            case 'chest':
                counter++
                btc += Number(value);
                console.log(`You found ${value} bitcoins.`);
                break;
            default:
                health -= value;
                counter++
                if(health > 0){
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${counter}`);
                    break;
                }
            break;
        }

    }
    if(health>0){
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${btc}`);
        console.log(`Health: ${health}`);
    }


}

MuOn("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")