function pigFood(data){

    let food = Number(data.shift()) *1000;
    let hay = Number(data.shift()) *1000;
    let cover = Number(data.shift()) * 1000;
    let pigWeight = Number(data.shift()) * 1000;
    let index = 1; 

    while(index <= 30){
        if(food <= 0 || hay <= 0 || cover <= 0 ){
  
            break;
        }

        food -= 300;

        if(index % 2 === 0){
            let dailyHay = food * 0.05;
            hay-= dailyHay;
        } 
        
        if(index % 3 === 0){
            let dailyCover = pigWeight / 3
            cover-= dailyCover
        }

        index++
    }
    if(food > 0 && hay > 0 && cover > 0){

        console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay/1000).toFixed(2)}, Cover: ${(cover/1000).toFixed(2)}.`);
        
        
        } else {
            console.log(`Merry must go to the pet store!`);
        }
}

pigFood(["10", 
"5", 
"5.2", 
"1"]);