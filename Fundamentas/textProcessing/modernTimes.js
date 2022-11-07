function moderdTimes(input){

    let sentence = input.split(' ');

    for(let el of sentence){
        if(el.length > 1 && el.startsWith('#')){
            let flag = true;
            let wordLower = el.toLowerCase();

            for(let i = 1; i < wordLower.length;i++){
                if(wordLower.charCodeAt(i) < 97 || wordLower.charCodeAt(i) > 122){
                    flag = false;
                    break;
                }
            }
            if(flag){
                console.log(el.slice(1));
            }
        }
    }

}

moderdTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');