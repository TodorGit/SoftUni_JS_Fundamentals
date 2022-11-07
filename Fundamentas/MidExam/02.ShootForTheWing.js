function shoot(data){

    let arr = data.shift().split(' ').map(Number);
    let shotsMade = 0; 


    for(el of data){
        let currentEl = Number(el); 
        if(el === 'End'){
            break;
        };
    

        if(currentEl <= arr.length - 1){
        shotsMade++;
        let currentNumber = Number(arr[el]);
        arr[el] = -1;

            for(let i = 0; i < arr.length;i++){
                if(arr[i] !== -1 && arr[i] <= currentNumber){
                    arr[i] += currentNumber;
                } else if(arr[i !== -1 && arr[i] > currentNumber]){
                    arr[i] -= currentEl
                }
            }
        }
        console.log(arr, shotsMade);
        
    }

    

 

}

shoot([
       "24 50 36 70",
       "0",
       "4",
       "3",
       "1",
       "End"])


    //    if ( num !== -1 && num < currentNumber)