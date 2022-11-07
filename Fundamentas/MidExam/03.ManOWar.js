function war(data){

    let pirateShip = data.shift().split('>').map(Number);
    let warShip = data.shift().split('>').map(Number);
    let maxHealth = Number(data.shift()); 
    let maxLength = warShip.length - 1;
    let lowHealth = maxHealth * 0.20;
    
    for(el of data){
        let current =  el.split(' ')
        let command = current[0];
        let indexOne = Number(current[1]);
        let indexTwo = Number(current[2]);
        let indexThree = Number(current[3]);

        if(command === 'Retire'){
            break;
        }

        switch(command){
            case 'Fire':
                if(indexOne <= maxLength){
                    warShip[indexOne] -= indexTwo;
                }break; 
            case 'Defend':
                if(indexOne <= maxLength && indexTwo <= maxLength){
                    for(let i = indexOne;i <= indexTwo; i++ ){
                        pirateShip[i] -= indexThree;
                        if(pirateShip[i] <= 0){
                            console.log("You lost! The pirate ship has sunken.");
                            break;
                        }
                    }
                } break; 
            case 'Repair':
                if(indexOne <= maxLength){
                    pirateShip[indexOne] += indexTwo;
                    if(pirateShip[indexOne] > maxHealth){
                        pirateShip[indexOne] = maxHealth;
                    }
                } break;
            case 'Status': 
                let sectionsToRepair = 0;
                for(el of pirateShip){
                    if(el < lowHealth){
                        sectionsToRepair++;
                    }
                }
                console.log(`${sectionsToRepair} sections need repair.`);
                break;
                default:
                    console.log('No such command!');
                    break;
        } 


    }
    let piratesLoss = false; 
    let pirateSum = 0;
    let warshipLoss = false;
    let warshipSum = 0 ;
    for(el of pirateShip){
        pirateSum += Number(el);
        if(el <= 0){
            piratesLoss = true;
        }
    }
    for(el of warShip){
        warshipSum += Number(el);
        if(el <= 0){
            warshipLoss = true;
        }
    }

    if(piratesLoss == false && warshipLoss == false){
        console.log(`Pirate ship status: ${pirateSum}`);
        console.log(`Warship status: ${warshipSum}`);
    }

  


}

// war(["12>13>11>20>66",
// "12>22>33>44>55>32>18",
// "70",
// "Fire 2 11",
// "Fire 8 100",
// "Defend 3 6 11",
// "Defend 0 3 5",
// "Repair 1 33",
// "Status",
// "Retire"])

war(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])
