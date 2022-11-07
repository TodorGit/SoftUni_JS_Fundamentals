function searchForNumber(arr,commands){

    let elementsToTake = commands.shift();
    let elementsToDel = commands.shift();
    let desiredNum = commands.shift();
    let myArr = [];

   for(let i = 0; i < arr.length;i++){
        if(elementsToTake > 0){
            myArr.push(arr[i]);
            elementsToTake--
        }
   }

   for(let i = 0; i < myArr.length;i++){
        if(elementsToDel > 0){
            myArr.shift();
            elementsToDel--
        }
   }

   let count = myArr.filter((v) => (v === desiredNum)).length;

console.log(`Number ${desiredNum} occurs ${count} times.`);
}

searchForNumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    
    )