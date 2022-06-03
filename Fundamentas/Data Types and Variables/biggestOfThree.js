function biggestOfThree(num1, num2, num3){

    let biggestNum = 0;

    if(num1 > num2 && num1 > num3){
        biggestNum = num1;
    } else if(num2 > num1 && num2 > num3){
        biggestNum = num2
    } else{
        biggestNum = num3;
    }

    console.log(biggestNum);
}

biggestOfThree(-2, 7, 3);