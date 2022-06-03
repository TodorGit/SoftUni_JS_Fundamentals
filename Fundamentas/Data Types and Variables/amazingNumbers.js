function amazingNumber(num){

    let numToString = String(num);
    let result = 0;

    for (let i = 0; i <numToString.length; i++) {
        let num = Number(numToString[i])
        result += num;
        
    }

    let resToString = String(result);
    let isAmazing = false;
    for (let i = 0; i < resToString.length; i++) {

        if(Number(resToString[i]) === 9 ){
            isAmazing = true;
            break
        } 
    }
    let amazing = isAmazing ? "True" : "False";
    console.log(`${num} Amazing? ${amazing}`);
}


amazingNumber(1233)