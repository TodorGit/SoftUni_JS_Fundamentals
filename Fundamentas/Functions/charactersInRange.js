function charInRange(firstChar,secondChar){

    let startChar = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let endChar = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let charsInRangeArray = [];


    for(let i = startChar + 1 ; i < endChar ; i++){
        let currentCHar = String.fromCharCode(i);
        charsInRangeArray.push(currentCHar);
    }

    console.log(charsInRangeArray.join(' '))

}

charInRange('a','d')