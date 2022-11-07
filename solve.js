function solve(arr){

    let newArr = [];
    let oldSum = 0;
    let newSum = 0; 

    for( let i = 0; i < arr.length; i++){
        let currentNum = Number(arr[i]);
        oldSum +=currentNum

        if(currentNum % 2 === 0){
            currentNum += i;
            newArr.push(currentNum);
        } else {
            currentNum -= i;
            newArr.push(currentNum);
        }

    }
    
    for(let num of newArr){
        newSum += num;
    }

    console.log(oldSum,newArr, newSum);

}



solve([5, 15, 23, 56, 35]);