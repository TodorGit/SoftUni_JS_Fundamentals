function sortNumbers(num1,num2,num3){

    const sorts = [num1,num2,num3].sort((a,b) =>  b- a);
    console.log(sorts.join('\n'));
}

sortNumbers(2,1,3)