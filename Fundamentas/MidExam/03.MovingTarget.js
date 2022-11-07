function movingTarget(data){

    let targets = data.shift().split(' ').map(Number);
    let index = 0;
   while(data.length > 0){
        let el = data[index]
        if(el === 'End'){
            break;
        };
        let token = el.split(' ')
        let command = token[0];
        let indexOne = Number(token[1]);
        let indexTwo = Number(token[2])

        switch(command){
            case 'Shoot':
                if(indexOne < targets.length && indexOne >= 0){
                    targets[indexOne] -= indexTwo;
                    if(targets[indexOne] <= 0){
                        targets.splice(indexOne, 1);
                    }
                };
            break;
            case 'Add':
                if(indexOne < targets.length && indexOne >= 0){
                    targets.splice(indexOne, 0 , indexTwo);
                } else { 
                    console.log('Invalid placement!');
                };
            break;
            case 'Strike':
                if (indexOne >= 0 && indexOne < targets.length) {
                    if (
                        indexOne - indexTwo >= 0 &&
                        indexOne + indexTwo < targets.length
                    ) {
                      targets.splice(
                        indexOne - indexTwo,
                        indexTwo + indexTwo + 1
                      );
                    } else {
                      console.log(`Strike missed!`);
                    }
                  } break;
                 
        }
        index++
        
    }

 
    if(targets.length > 0){
       console.log(targets.join('|'));
    }

}

movingTarget([
"52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])
console.log(`-------------`);
movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])

