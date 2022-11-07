function oddAndEvenSum(num){
   
    let oddSum = 0;
    let evenSum = 0;
    let numberAsString = num.toString();

    for(el of numberAsString){
        let currentElement = Number(el);
        
        if(currentElement % 2 === 0){
            evenSum+=currentElement
        } else {
            oddSum+=currentElement
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

}

oddAndEvenSum(1000435);