function asciiSumator(input){
    let firstChar = input[0]
    let secondChar = input[1]
    let chars = input[2];
    let sum = 0;
    

    if(firstChar.charCodeAt() < secondChar.charCodeAt()){
        
    } else {
        firstChar = secondChar;
        secondChar = input[0]
    }

    let fCharAsci = Number(firstChar.charCodeAt());
    let sCharAsci = Number(secondChar.charCodeAt());
   
    for(let i = 0; i < chars.length; i++){
        let el = chars[i];
        if(el.charCodeAt() > fCharAsci && el.charCodeAt() < sCharAsci){
            sum += Number(el.charCodeAt())
        }
    }

    console.log(sum);
    

}

asciiSumator(['a',

'1',

'jfe392$#@j24ui9ne#@$'])