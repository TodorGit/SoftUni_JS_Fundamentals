function oredersTwo(product, qty){
    const coffeePrice = 1.5;
    const waterPrice = 1;
    const cokePrice = 1.4; 
    const snackPrice = 2;
    let totalPrice; 
    switch(product){
        case 'coffee' : totalPrice = coffeePrice * qty; break;
        case 'water' : totalPrice = waterPrice * qty; break;
        case 'coke' : totalPrice = cokePrice * qty; break;
        case 'snacks' : totalPrice = snackPrice * qty; break;
    }

    console.log(totalPrice.toFixed(2));

}

oredersTwo('water', 5)