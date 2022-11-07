function processOddNumbers(num){

    let filteredElements = num.filter((el,i)=> i % 2 ==1);

    let doubledNums = filteredElements.map(x => x*2);

    let reversedNumbers = doubledNums.reverse();
    console.log(reversedNumbers.join(" "))


}

processOddNumbers([10, 15, 20, 25]);