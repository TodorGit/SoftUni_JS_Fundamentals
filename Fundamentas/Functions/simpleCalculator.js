function simpleCalculator(x, y, op) {

    switch(op){
        case 'multiply': let multiply = (x,y) => x*y; console.log(multiply(x,y));break;
        case 'divide': let divide = (x,y) => x/y; console.log(divide(x,y));break;
        case 'add': let add = (x,y) => x+y; console.log(add(x,y));break;
        case 'subtract': let subtract = (x,y) => x-y; console.log(subtract(x,y));break;
    }


    
}

simpleCalculator(5,5,'multiply')