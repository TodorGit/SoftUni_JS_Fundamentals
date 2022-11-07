function manOfWar(data){

    let pirateShip = data.shift().split('>').map(Number);
    let warShip = data.shift().split('>').map(Number);
    let sctionHealth = Number(data.shift());
    let percentOfMaxCap = Number(sctionHealth * 0.20);

    let pShipDown = false;
    let wShipDown = false;

    for(element of data){
        if(element === 'Retire'){
            break;
        }

        let tokens = element.split(' ');
        let command = tokens[0];

        switch(command){

            case 'Fire':
                let index = +tokens[1];
                let damage = +tokens[2];

                if(index < 0 || index >= warShip.length){
                    continue;
                }

                warShip[index] -= damage;

                if(warShip[index] <= 0){
                    wShipDown = true;
                    console.log(`You won! The enemy ship has sunken.`);
                    break;
                }   break;

            case 'Defend' : 
                let startIndex = +tokens[1];
                let endIndex = +tokens[2];
                let damages = +tokens[3];


                if(startIndex < 0 || startIndex >= warShip.length || endIndex < 0 || endIndex >= warShip.length){
                    continue;
                }

                for(let i = startIndex; i <= endIndex;i++){
                    pirateShip[i] -= damages

                    if(pirateShip[i] === 0){
                        console.log(`You lost! The pirate ship has sunken.`);
                        pShipDown = true;
                        break;
                    }
                } break;

            case 'Repair' :
                let inde = +tokens[1];
                let health = +tokens[2];

                if(inde < 0 || inde >= warShip.length){
                    continue;
                }

                pirateShip[inde] += health;

                if(pirateShip[inde] > sctionHealth ){
                    pirateShip[inde] = sctionHealth;
                }  break;

            case 'Status' :
                
                let count = 0;
                
                for(el of pirateShip){
                    if(el < percentOfMaxCap){
                        count++
                    }
                }
                console.log(`${count} sections need repair.`);
                break;

        }

    }

    let sumP = 0;
    let sumW = 0;
    if(pShipDown === false && wShipDown === false){

        pirateShip.forEach(el => {
            sumP+= el;
        });
        warShip.forEach(el => {
            sumW+= el;
        })

        console.log(`Pirate ship status: ${sumP}`);
        console.log(`Warship status: ${sumW}`);

    }


}

manOfWar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])

