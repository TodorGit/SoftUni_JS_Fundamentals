function piggy(data){

    let food = +data.shift() * 1000
    let hay = +data.shift() * 1000
    let cover = +data.shift() * 1000
    let weight = +data.shift() * 1000

    for(let i = 1; i<=30; i++){

        if(food <= 0 || hay <= 0 || cover <= 0){
            break;
        }

        food -= 300;

        if(i % 2 === 0 ){
            hay -= (food * 0.05);
        } 

        if(i % 3 === 0){
            cover -= (weight / 3);
        }
    }

    food = (food / 1000).toFixed(2);
    hay = (hay / 1000).toFixed(2);
    cover = (cover / 1000).toFixed(2);

    if(food > 0 && hay > 0 && cover > 0){
        console.log(`Everything is fine! Puppy is happy! Food: ${food}, Hay: ${hay}, Cover: ${cover}.`);
    } else {
      console.log("Merry must go to the pet store!");  
    }

}

piggy(["10", 
"5", 
"5.2", 
"1"])

piggy(["1", 
"1.5", 
"3", 
"1.5"
])

piggy(["9",
"5",
"5.2",
"1"])
