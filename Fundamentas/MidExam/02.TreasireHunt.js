function treasure(data){

    let loot = data.shift().split('|');
    let avg = 0; 
    let res = [];
    let len = 0;

    for(el of data){
        if(el === 'Yohoho!'){
            break;
        }

        let [command, indexOne, indexTwo, indexThree] = el.split(' ');
      
        switch(command){
            
            case 'Loot':
                if(!loot.includes(indexOne) && indexOne !== undefined){
                    loot.unshift(indexOne);
                } 
                if(!loot.includes(indexTwo) && indexTwo !== undefined){
                    loot.unshift(indexTwo);
                } 
                if(!loot.includes(indexThree) && indexThree !== undefined){
                    loot.unshift(indexThree);
                }; break;
            case 'Drop':
                if(indexOne <= loot.length -1){
                    let value = loot.splice(indexOne, 1).toString();
                    loot.push(value)
                }; break;
            
            case 'Steal':
                if(indexOne <= loot.length - 1){
                    for(let i = 0; i < indexOne; i++){
                        let el = loot.pop();
                        res.unshift(el);     
                    }
                   
                }
            break;
            default: break; 
        }
    }

    for(el of loot){
       avg += Number(el.length);
       len++;
    }
   

    if(res.length > 0){
        console.log(`Average treasure gain: ${(avg / len).toFixed(2)} pirate credits.`)
    } else if(res.length <= 0) { 
        console.log(loot.join(', '));
        console.log("Failed treasure hunt.");
    }

}

treasure(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])



