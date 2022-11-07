function heroRecruitment(data){

    let result = new Map();

    for(let line of data){
        if(line === 'End'){
            break;
        }

        let tokens = line.split(' ');
        
        if(line.includes('Enroll')){
            let currentHero = tokens[1];

            if(result.has(currentHero)){
                console.log(`${currentHero} is already enrolled.`);
            } else {
                result.set(currentHero,[]);
            }
        } else if(line.includes('Learn')){
            let currentHero = tokens[1];
            let spellName = tokens[2];

            if(!result.has(currentHero)){
                console.log(`${currentHero} doesn't exist.`);
            } else if(result.get(currentHero)[0] === spellName){
                console.log(`${currentHero} has already learnt ${spellName}.`);
            } else{
                result.get(currentHero).push(spellName);
            }
        } else if(line.includes('Unlearn')){
            let currentHero = tokens[1];
            let spellName = tokens[2];

            if(!result.has(currentHero)){
                console.log(`${currentHero} doesn't exist.`);
            } else if(result.get(currentHero)[0] !== spellName){
                console.log(`${currentHero} doesn't know ${spellName}.`);
            } else {
                result.get(currentHero)[0] = [];
            }
        } else{
            break;
        }

    }

    console.log(`Heroes:`);
    for(let [hero, value] of result){
        console.log(`== ${hero}: ${value}`);
    }

    console.table(result)


}

heroRecruitment(["Enroll Stefan",
"Enroll Peter",
"Enroll Stefan",
"Learn Stefan ItShouldWork",
"Learn John ItShouldNotWork",
"Unlearn George Dispel",
"Unlearn Stefan ItShouldWork",
"End"])

console.log('------');

heroRecruitment(["Enroll Stefan",
"Learn Stefan ItShouldWork",
"Learn Stefan ItShouldWork",
"Unlearn Stefan NotFound",
"End"])

console.log('------');

heroRecruitment(["Enroll Stefan",
"Enroll Peter",
"Enroll John",
"Learn Stefan Spell",
"Learn Peter Dispel",
"End"])

