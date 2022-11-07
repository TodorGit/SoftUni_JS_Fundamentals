function perfectNumber(num){

    let sumOfdivisors = 1;

    for(let currentNumber = 2; currentNumber<num ; currentNumber++){

        if(num % currentNumber === 0){
            sumOfdivisors += currentNumber;
        }
    }

    if(sumOfdivisors === num){
        console.log('We have a perfect number!');
    } else {
        console.log(" It's not so perfect.")
    }


}

perfectNumber(6);