function firstAndLast(arr){

    let firstEl = arr.shift();
    let lastElement = arr.pop();

    console.log(Number(firstEl) + Number(lastElement));


}

firstAndLast(['20', '30', '40']);
firstAndLast(['5', '10']);