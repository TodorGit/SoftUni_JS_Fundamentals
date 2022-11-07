function guineaPig(array){

    let food = array[0] * 1000;
    let hay = array[1] * 1000;
    let cover = array[2] * 1000;
    let weight = array[3] * 1000;
    let index = 1;

 
  
    while(index <= 30){

        food-=300; 

        if(index % 2 === 0 ){
            let percent = food * .05
            hay -= percent;
        }

        if(index % 3 === 0){
            let coverPercent = weight / 3;
            cover -= coverPercent; 
        }

        if(food <= 0 || hay <= 0 || cover <= 0){
            
            break;
        }

        index++
    }
    let foodResult = (food/1000).toFixed(2);
    let hayResult = (hay/1000).toFixed(2);
    let coverResult = (cover/1000).toFixed(2);

if(food > 0 && hay > 0 && cover > 0){

console.log(`Everything is fine! Puppy is happy! Food: ${foodResult}, Hay: ${hayResult}, Cover: ${coverResult}.`);


} else {
    console.log(`Merry must go to the pet store!`);
}

}

guineaPig(["10", 
"5", 
"5.2", 
"1"])



