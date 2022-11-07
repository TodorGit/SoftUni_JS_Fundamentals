function compStore(data) {

    let isSpecial = false;
    let totalWithoutTax = 0;
    let finalPrice = 0;

    for (let i = 0; i < data.length; i++) {
        let currentValue = data[i];


        if (currentValue === 'special') {
            isSpecial = true;
            break;
        };

        if (currentValue === 'regular') {
            break;
        }

        if (currentValue > 0) {
            totalWithoutTax += Number(currentValue);
        } else {
            console.log('Invalid price!');
        };
    }

    finalPrice = totalWithoutTax * 1.2;
    let taxes = finalPrice - totalWithoutTax;

    if (isSpecial) {
        finalPrice = finalPrice * 0.9;
    }

    if (finalPrice <= 0) {
        console.log("Invalid order!");
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalWithoutTax}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${finalPrice.toFixed(2)}$`);
    }



}

compStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])
    
