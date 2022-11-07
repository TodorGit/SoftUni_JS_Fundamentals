function imitationGame(data){


    let message = data.shift();
    
    for(line of data){
        if(line === 'Decode'){
            break;
        }
        
        let tokens = line.split('|');
        let command = tokens[0];

        switch(command){
            case 'Move':
                let letters = Number(tokens[1]);
                let firstPart = message.substring(0, letters);
                let secondPart = message.substring(letters, message.length);
                message = secondPart + firstPart
                break;
            case 'Insert':
                let index = Number(tokens[1]);
                let value = tokens[2];
                let firstParts = message.substring(0, index);
                let secondParts = message.substring(index, message.length);
                message = firstParts + value + secondParts
                break;
            case 'ChangeAll':
                let subStr = tokens[1];
                let replacement = tokens[2];
                for(let el of message){
                    if(message.includes(subStr)){
                        message = message.replace(subStr, replacement);
                    }
                }
        }   

    }

    console.log(`The decrypted message is: ${message}`);

}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ])

















// function imitationGame(data){

//     let message = data.shift();
    
//     for(let element of data){
//        if(element === 'Decode'){
//           break;
//        }

//        let [command, indexOne, indexTwo] = element.split('|');
       
//        switch(command){

//         case 'Move':

//             let subStr = message.slice(0,indexOne);
//             message = message.replace(subStr,'')
//             message = message.concat(subStr)
//             break;

//         case 'Insert':

//         let firstPart = message.substring(0, indexOne);
//         let secondPart = message.substring(indexOne, message.length)
//         message = firstPart + indexTwo + secondPart;
//         break;

//         case 'ChangeAll':

//             for(let el of message){
//                 if(message.includes(indexOne)){
//                     message = message.replace(indexOne, indexTwo);
//                 }
//             }
//             break;
//        }

//     }

//     console.log(`The decrypted message is: ${message}`);



// }

