function heartDelivery(arr){
    let neighborhood = arr.shift().split('@');
    let commands = [...arr];
    commands.pop();
    let currentIndex = 0;
    let maxIndex = neighborhood.length - 1;
    let lastPosition = 0;
 
    for (let i = 0; i < commands.length; i++){
        let currentCommand = commands[i].split(' ');
        let jumpRange = currentCommand[1];
        currentIndex += Number(jumpRange);
        if (currentIndex > maxIndex){
            currentIndex = 0;
        }
        if (neighborhood[currentIndex] == 0){
            console.log(`Place ${currentIndex} already had Valentine's day.`);
            continue;
        }
        neighborhood[currentIndex] -= 2;
        if (neighborhood[currentIndex] == 0){
            console.log(`Place ${currentIndex} has Valentine's day.`)
        }
        lastPosition = currentIndex;
    }

    
    console.log(`Cupid's last position was ${lastPosition}.`)
    let counterOfFailedPlaces = 0;
    for (let el of neighborhood){
        if (!el == '0'){
            counterOfFailedPlaces++;
        }
    }
 
    if (counterOfFailedPlaces == 0){
        console.log('Mission was successful');
    } else {
        console.log(`Cupid has failed ${counterOfFailedPlaces} places.`)
    }
}

heartDelivery(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"]);

console.log('----------------------------');

heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"]);

