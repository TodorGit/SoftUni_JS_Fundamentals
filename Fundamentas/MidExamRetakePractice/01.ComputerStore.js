function computerStore(data){

    let isSpecial = false;
    let priceExTax = 0;

    for(element of data){
        if(element === 'special'){
            isSpecial = true;
            break;
        }

        if(element === 'regular'){
            isSpecial = false;
            break;
        }

        if(Number(element) < 0){
            console.log('Invalid price!');
            continue;
        }

        priceExTax += Number(element)

    }

    let priceWithTax = priceExTax * 1.2;
    let tax = (priceWithTax - priceExTax).toFixed(2);

    if(isSpecial){
        priceWithTax *= 0.9;
    }

    if(priceWithTax <= 0){
        return console.log("Invalid order!");
    } 
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${priceExTax}$`);
        console.log(`Taxes: ${tax}$`);
        console.log(`-----------`);
        console.log(`Total price: ${priceWithTax.toFixed(2)}$`);
    

    

}

// computerStore([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
//     ])
    

// computerStore([
//     '1023', 
//     '15', 
//     '-20',
//     '-5.50',
//     '450', 
//     '20', 
//     '17.66', 
//     '19.30', 'regular'
//     ])
    
// computerStore([
//     'regular'
//     ])
    