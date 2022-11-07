function heroesOfMagic(data){

    let heroNumber = Number(data.shift());
    let heroes = new Map();

    for(let element of data){

        if(element === 'End'){
            break;
        }

        let [hero, hp, mp] = element.split(' ');

        if(!element.includes('-')){
        heroes.set(hero,[]);
        heroes.get(hero).push(Number(hp));
        heroes.get(hero).push(Number(mp));
        }

        if(element.includes('-')){
            let tokens = element.split(' - ');

            if(tokens.includes('CastSpell')){

                let currentHero = tokens[1];
                let mpNeeded = Number(tokens[2]);
                let spellName = tokens[3];

                if(heroes.get(currentHero)[1] < mpNeeded){
                    console.log(`${currentHero} does not have enough MP to cast ${spellName}!`);
                } else {
                    heroes.get(currentHero)[1] -= mpNeeded;
                    console.log(`${currentHero} has successfully cast ${spellName} and now has ${heroes.get(currentHero)[1]} MP!`);
                }
            } else if(tokens.includes('TakeDamage')){
                let currentHero = tokens[1];
                let damage = Number(tokens[2]);
                let attacker = tokens[3];

                heroes.get(currentHero)[0] -= damage;
                if(heroes.get(currentHero)[0] < 0){
                    console.log(`${currentHero} has been killed by ${attacker}!`);
                    heroes.delete(currentHero)
                } else {
                    console.log(`${currentHero} was hit for ${damage} HP by ${attacker} and now has ${heroes.get(currentHero)[0]} HP left!`);
                }

            } else if(tokens.includes('Recharge')){

                let currentHero = tokens[1];
                let amount = Number(tokens[2]);
                let max = 200;
                let oldMP = heroes.get(currentHero)[1];
                let difference = 0;

                heroes.get(currentHero)[1] += amount;
                if(heroes.get(currentHero)[1] > max){
                    heroes.get(currentHero)[1] = max;
                }
                difference = heroes.get(currentHero)[1] - oldMP;
                console.log(`${currentHero} recharged for ${difference} MP!`);

            } else if(tokens.includes('Heal')){

                let currentHero = tokens[1];
                let amount = Number(tokens[2]);
                let max = 100;
                let oldHealth = heroes.get(currentHero)[0];
                let difference = 0;

                heroes.get(currentHero)[0] += amount;
                if(heroes.get(currentHero)[0] > max){
                    heroes.get(currentHero)[0] = max;
                }
                difference = heroes.get(currentHero)[0] - oldHealth;
                console.log(`${currentHero} healed for ${difference} HP!`);

            
            }

        }

    }

    for(let[heroName,stats] of heroes){
        console.log(heroName);
        console.log(`  HP: ${stats[0]}`);
        console.log(`  MP: ${stats[1]}`);
    }

    
}

heroesOfMagic(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
    ])