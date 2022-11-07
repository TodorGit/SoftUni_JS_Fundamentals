function translator(data){
    let items = [];
    let strNum = Number(data.shift());  
    let pattern = /([!])([A-Z][a-z]{3,})\1[:]([\[])([A-Za-z]{8,})([\]])/gm;

    
    for(let i = 0; i < strNum; i++){
        let str = data[i];
        let matchFound = str.match(pattern);
        let tokens = data[i].split(':')
        let first = tokens[0];
        let second = tokens[1];
        first = first.substring(1, first.length - 1);
        second = second.substring(1, second.length - 1)
     
        
        if(!matchFound){
            console.log("The message is invalid");
        } else { 
            for(el of second){
              items.push(el.charCodeAt());
              }
            console.log(`${first}: ${items.join(' ')}`);
        }

    }


}

translator(["2",
"!Send!:[IvanisHere]",
"*Time@:[Itis5amAlready"])


// translator(["3",
// "go:[outside]",
// "!drive!:YourCarToACarWash",
// "!Watch!:[LordofTheRings]"])




// if(matchFound !== null){
//     matchFound = String(matchFound);
//     for(el of matchFound){
//         items.push(el.charCodeAt());
//     }
//     console.log(items);
// } else {
//     console.log("The message is invalid");
// }