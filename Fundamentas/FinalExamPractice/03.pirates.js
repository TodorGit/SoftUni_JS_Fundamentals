function pirates(data){


    let targets = new Map();


    for(let element of data){
        if(element === 'Sail'){
            break;
        }

        let[city, population, gold] = element.split('||');
        
        if(targets.get(city) === city){
            targets.get(city)[0] += population;
            targets.get(city)[1] += gold;
        } else {
        targets.set(city,[]);
        targets.get(city).push(Number(population));
        targets.get(city).push(Number(gold));
        }

       

    }


    for(line of data){
        if(line === 'End'){
            break;
        }

        let tokens = line.split('=>');
        

        if(tokens.includes('Plunder')){
            let currentCity = tokens[1];
            let peopleKilled = Number(tokens[2]);
            let stolenGold = Number(tokens[3]);

            targets.get(currentCity)[0] -= peopleKilled;
            targets.get(currentCity)[1] -= stolenGold;

            console.log(`${currentCity} plundered! ${stolenGold} gold stolen, ${peopleKilled} citizens killed.`);

            if(targets.get(currentCity)[0] <= 0 || targets.get(currentCity)[1] <= 0){
                targets.delete(currentCity);
                console.log(`${currentCity} has been wiped off the map!`);
            } 
        } else if(tokens.includes('Prosper')){
            let currentCity = tokens[1];
            let gold = Number(tokens[2]);

            if(gold > 0){
                targets.get(currentCity)[1] += gold;
                console.log(`${gold} gold added to the city treasury. ${currentCity} now has ${targets.get(currentCity)[1]} gold.`);
            } else {
                console.log("Gold added cannot be a negative number!");
            }
        }
    }



    let size = Number(targets.size);

    if(size <= 0){
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else{
        console.log(`Ahoy, Captain! There are ${size} wealthy settlements to go to:`);
        targets.forEach( (value, city) => {
            console.log(`${city} -> Population: ${value[0]} citizens, Gold: ${value[1]} kg`);
        })

    }



}