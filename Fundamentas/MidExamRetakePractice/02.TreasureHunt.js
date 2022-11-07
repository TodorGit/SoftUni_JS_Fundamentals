function hunt(data){

    let loot = data.shift().split('|');

    for(let line of data){
        if(line === 'Yohoho!'){
            break;
        }
        
        let tokens = line.split(' ');
        let command = tokens[0];

        if(command === 'Loot'){
            for(let i = 1; i<tokens.length;i++){
                if(!loot.includes(tokens[i])){
                    loot.unshift(tokens[i]);
                }else {
                    continue;
                };
            };
        } else if(command === 'Drop'){
            let index = +tokens[1];

            if(index < 0 || index > loot.length){
                break;
            } else {
                let item = loot.splice(index, 1);
                loot.push(item);
            }
        } else if(command === 'Steal'){
            let index = +tokens[1];
            if(index >= loot.length){
                loot = []
            }
            let count = Number(tokens[1]); 
            let items = loot.splice(-count);
            console.log(items.join(', '));
        }

    };

    let length = 0;
    let avg = 0;
    if(loot.length <= 0){
        console.log(`Failed treasure hunt.`);
    } else {
        for(el of loot){
            length += Number(el.length);
        };
        avg = length / loot.length;

        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
    }

}

hunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])

hunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])
