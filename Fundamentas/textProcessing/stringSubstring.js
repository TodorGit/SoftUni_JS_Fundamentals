function stringSubstring(words, sentence){

    let sentenceArr = sentence.split(' ');

    for(let word of sentenceArr){
        if(word.toLowerCase() === words.toLowerCase()){
            console.log(words)
            return
        } 
    }

    console.log(`${words} not found!`);

}

stringSubstring(
    'javascript',
    'JavaScript is the best programming language');