function smallestOfTwoNumbers(arr){
    let arr2 = [];
    let newArr = arr.sort((a,b) => a-b);
    arr2.push(newArr[0], newArr[1]);
    console.log(arr2.join(' '));

}

smallestOfTwoNumbers([30, 15, 50, 5]);