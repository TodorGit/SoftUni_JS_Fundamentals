function maxNumber(array){

    let newArray = [];

    for(let i = 0; i<array.length;i++){
        let num1 = array[i];
        let isLargest = true; 

        for(let j = i+1; j < array.length;j++){
            let num2 = array[j];

            if(num1 <= num2){
                isLargest = false
            }
        }
        if(isLargest){
            newArray.push(num1);
        }
    }

    console.log(newArray.join(" "))
}

maxNumber([1,4,3,2])