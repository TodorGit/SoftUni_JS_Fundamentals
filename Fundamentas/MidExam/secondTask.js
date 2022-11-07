function coffeeLover(data){

    let coffeeList = data.shift().split(' ');
    let numberOfCommands = Number(data.shift());
    let index = 0;
    

    while(index < numberOfCommands){
        let current = data[index].split(' ');
        let command = current.shift();
        let valueOne = current.shift();
        let valueTwo = current.shift();

       switch(command){

        case 'Include': 
            coffeeList.push(valueOne);       
            break;
        case 'Remove':
            if(coffeeList.length < valueTwo){
                continue;
            } else if (valueOne === 'first'){
                coffeeList.splice(0,valueTwo);
            } else {
                coffeeList.splice(-1,valueTwo);
            } break;
        case 'Prefer':
            if(coffeeList.length < valueOne && coffeeList.length > valueOne){
               continue;
            } else if (coffeeList.length < valueTwo && coffeeList.length > valueTwo){
                continue;
            } else{
                [coffeeList[valueOne], coffeeList[valueTwo]]=[coffeeList[valueTwo], coffeeList[valueOne]];
            } break;

        case 'Reverse':
            coffeeList.reverse();
            break;
       } 


       command = data[index];
       index++
    }
    
    console.log('Coffees: ');
    console.log(coffeeList.join(' '));

}

coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
"5",
"Include TurkishCoffee",
"Remove first 2",
"Remove last 1",
"Prefer 3 1",
"Reverse"]);
