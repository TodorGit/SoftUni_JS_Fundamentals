function archery(data){

    let targets = data.shift().split('|').map(Number);
    let points = 0;

for(element of data){

    let tokens =  element.split('@');
    let startIndex ;
    let length;
    let counter = 0;

    if(tokens.includes("Shoot Left")){
        startIndex = +tokens[1];
        length = +tokens[2];

        if(startIndex < 0 || startIndex >= targets.length){
            continue;
        }
        for(let i = startIndex; counter < length; i--){
            counter++
                if (i < 0){
                    i = targets.length - 1
                }
                if(counter === length){
                    if(targets[i] < 5){
                        points+= Number(targets[i]);
                        targets[i] = 0;
               
                    break;
                }else{
                        targets[i]-=5;
                        points+=5
                        break;
                    };  
                } ;    
        };
    } else if(tokens.includes("Shoot Right")){
            startIndex = +tokens[1]
            length = +tokens[2];
    
            if(startIndex < 0 || startIndex >= targets.length){
                continue;
            }
    
            for(let i = startIndex; counter < length ;i++){
                counter++;
                    if (i > targets.length - 1){
                        i = 0
                    }
                    if(counter === length){
                        if(targets[i] < 5){
                            points+= Number(targets[i]);
                            targets[i] = 0;
                            break;
                        }else {
                            targets[i]-=5;
                            points+=5
                            break;
                     }
                 }
             }
    } else if(tokens.includes('Reverse')){
            targets.reverse();
            
    } else if(tokens.includes('Game over')){
            console.log(targets.join(' - '));
            console.log(`John finished the archery tournament with ${points} points!`);
            
    } else {
        break;
    }
    
}

}

archery(["10|10|10|10|10",
"Shoot Left@0@2",
"Shoot Right@4@5",
"Shoot Right@6@5",
"Reverse",
"Game over"])

archery(["20|30|40|50|60",
"Shoot Left@0@12",
"Shoot Right@4@15",
"Shoot Left@6@5",
"Reverse",
"Game over"])



