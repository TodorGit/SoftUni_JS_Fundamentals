function primeNumbers(num){

    let isTrue = false; 
    if (num % num === 0 && num % 2 != 0 ) {
        isTrue = true;
    } else{
        isTrue = false;
    }

    console.log(isTrue);

}

primeNumbers(7)