function delivery(data){


    let hood = data.shift().split('@');
    let index = 0;
    let maxIndex = hood.length - 1;
    let lastPosition =0 ;
    let currentIndex = 0;
    
    while(data[index] !== 'Love!'){

        let command = data[index].split(' ');
        let jump = command[1];
        currentIndex += Number(jump);
        index++
        if(currentIndex > maxIndex){
            currentIndex = 0;
        }

        if(hood[currentIndex] === 0){
            console.log(`Place ${currentIndex} already had Valentine's day.`);
            continue;
              
        }
        hood[currentIndex] -= 2

        if(hood[currentIndex] === 0){
            console.log(`Place ${currentIndex} has Valentine's day.`);
        }

        lastPosition = currentIndex;

        
    }

    console.log(`Cupid's last position was ${lastPosition}.`);
    let failed = 0
    for(el of hood){
        if(el !== 0){
            failed++
        }
    }

    if(failed === 0){
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${failed} places.`)
    }

}

// delivery(["10@10@10@2",
// "Jump 1",
// "Jump 2",
// "Love!"]);

delivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])

