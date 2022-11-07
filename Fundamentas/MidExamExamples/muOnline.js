function muOnline(data){

    let rooms = data.split('|');
    let health = 100;
    let bitcoins = 0; 

    for(let i = 0; i < rooms.length;i++){

        if(health <=0){
            break;
        }
        let currentRoom = rooms[i].split(' ');
        let command = currentRoom.shift();
        let value = Number(currentRoom.shift());
        let bestRoom = i + 1;
        switch(command){

            case 'potion':
                if(health <= 100){
                    let currentHealth = health;
                    health += value; 
                    if(health > 100){
                        value = 100 - currentHealth;
                        health = 100;
                        
                    }
                    console.log(`You healed for ${value} hp.`);
                    console.log(`Current health: ${health} hp.`);
                } break;
            
            case 'chest':
                bitcoins += value;
                console.log(`You found ${value} bitcoins.`);
                break;
            default:
                health -= value; 
                if(health <= 0){
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${bestRoom}`);
                    health = 0 ;
                    break;
                } else {
                    console.log(`You slayed ${command}.`);
                } break; 

        }  

    }

    if(health > 0){
        console.log(`You've made it!`)
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }

}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
console.log('------------------------')
muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');