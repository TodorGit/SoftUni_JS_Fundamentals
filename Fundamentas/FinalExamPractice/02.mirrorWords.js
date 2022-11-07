function mirrorWords(input) {
    let pattern = /(@|\#)(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/g;
    let mirrorWords = [];
    let count = 0;
    while ((matchEl = pattern.exec(input[0])) !== null) {
        count++;
        let reversedWord = matchEl.groups.secondWord.split("").reverse().join("")
        if (matchEl.groups.firstWord === reversedWord) {
            mirrorWords.push(`${matchEl.groups.firstWord} <=> ${matchEl.groups.secondWord}`)
        }
    }
    if(count > 0) {
        console.log(`${count} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }
    if (mirrorWords.length > 0) {
        console.log('The mirror words are:');
        console.log(mirrorWords.join(", "));
    } else {
        console.log('No mirror words!');
    }
}


































// function mirrorWords(data){

//     let str = data.shift();
//     let pattern = /(@|#)[A-Za-z]{3,}\1/gm;
//     let matches = str.match(pattern);
//     let stored = [];
//     let count = 0;

 
//     for(let i = 0; i< matches.length;i++){
        
//         let current = matches[i];
//         let notReversed = matches[i+1]
//         let reversed = '';
//         if(matches[i+1] !== undefined){
//             count++
//             let next = matches[i+1]
//             reversed = next.split('').reverse().join('');
//         }

//         if(current === reversed){
//             stored.push(`${current} <=> ${notReversed}`);
//         }
 
//     }

//     if(!matches){
        
//         console.log("No word pairs found!");
//     } else {
//         console.log(`${count / 2} word pairs found!`);
//     }

//     if(stored.length <= 0){
//         console.log("No mirror words!");
//     } else {
        
//     console.log(`The mirror words are:`);
//     console.log(stored.join(", ")); 

//     }


// }

// mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])
