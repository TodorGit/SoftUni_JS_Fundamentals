function revealWords(words, sentence){

    let wordsTorReveal = words.split(', ');
    let sentenceArr = sentence.split(' ');
    let resultSentence = '';

    for(let element of wordsTorReveal){
       for(let word of sentenceArr){
            if(word.includes('*') && word.length === element.length){
                sentence = sentence.replace(word, element);
             
            }
       }
    }

    console.log(sentence);

}

revealWords('great, learning',

'softuni is ***** place for ******** new programming languages');