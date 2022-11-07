function solve(input){
 
    let priceWithoutTaxes = 0
    let type = input.pop().toLowerCase();
    let taxes = 0
    let totalPrice = 0
 
    for(price of input)
    {
       const currentPrice = Number(price);

        if(price > 0){
            priceWithoutTaxes += currentPrice
        } else {
            console.log("Invalid price!")
            continue;
        }
 
    }

    
    if(priceWithoutTaxes === 0)
    {
        return console.log("Invalid order!")
    }

    taxes = priceWithoutTaxes * 0.2
    totalPrice = taxes + priceWithoutTaxes 

    if(type === "special")
    {
        totalPrice = totalPrice - (totalPrice * 0.1)
    }

    console.log(`Congratulations you've just bought a new computer!`)
    console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`) 
    console.log(`Taxes: ${taxes.toFixed(2)}$`)
    console.log("-----------")
    console.log(`Total price: ${totalPrice.toFixed(2)}$`)
 
}   

solve([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])
    
    
    
    







    // let currentValue = Number(input[index])
    // let curValue = input[index];

    // if(curValue !== 'special' || curValue !== 'regular'){
    // sum += currentValue;
    // }
    // index++;
    //     if(curValue == 'special'){
    //         isSpecial = true;
    //         break;
    //     } else if(curValue == 'regular'){
    //         isSpecial = false;
    //         break;
    //     } else {

    //         continue;
    //     }