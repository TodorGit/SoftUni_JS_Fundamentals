function btcMining(input){
    let index = 0;
    const pricePerBTC = 11949.16;
    const pricePerGramgold = 67.51;
    let totalIncome = 0;
    let days = 1;
    let purchaseDay;


    while(days <= input.length){
        
        if(totalIncome <= pricePerBTC){
            dayOfPurchese = days;
        }

        let dailyIncome = Number(input[index]);

        if(days % 3 == 0){
            dailyIncome *= 0.7;
        }

        totalIncome +=dailyIncome*pricePerGramgold;
    
        days++
        index++
    }

    let btcBought = Math.floor(totalIncome/pricePerBTC);
    let moneyLeft = totalIncome - (btcBought*pricePerBTC);


    if(btcBought < 1){
        console.log(`Bought bitcoins: ${btcBought}`);
        console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);
    } else {
        console.log(`Bought bitcoins: ${btcBought}`);
        console.log(`Day of the first purchased bitcoin: ${dayOfPurchese}`);
        console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);
    }

}

btcMining([3124.15,504.212,2511.124])


// for(i=0; i < input.length; i++){
        
//     if(i == 0 ){
//         earnings = dayOne * pricePerGramgold;
//         if(earnings >= pricePerBTC){
//             earnings -= pricePerBTC;
//             btcBought++
//             dayOfPurchese = i;
//         }
//     } else if(i==1){
//         earnings += dayTwo * pricePerGramgold;
//         if(earnings >= pricePerBTC){
//             earnings -= pricePerBTC;
//             btcBought++
//             dayOfPurchese = i;
//         }
//     } else{
//         earnings += dayThree * pricePerGramgold;   
//         if(earnings >= pricePerBTC){
//             earnings -= pricePerBTC;
//             btcBought++
//             dayOfPurchese = i;
//         }
//     }
// }