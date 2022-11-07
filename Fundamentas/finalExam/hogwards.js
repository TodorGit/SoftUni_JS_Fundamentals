function hogwards(data){

    let spell = data.shift();

    for(let line of data){
       if(line === 'Abracadabra'){
        break;
       }

       let tokens = line.split(' ');
       let command = tokens[0];

       switch(command){

        case 'Abjuration':
            spell = spell.toUpperCase();
            console.log(spell);
            break;
        case 'Necromancy':
            spell = spell.toLowerCase();
            console.log(spell);
            break;
        case 'Illusion':
            let letterIndex = Number(tokens[1]);
            let replacement = tokens[2];

            if(letterIndex >= 0 && letterIndex < spell.length){

                let firstPart = spell.substring(0, letterIndex);
                let secondPart = spell.substring(letterIndex + 1, spell.length);
                spell = firstPart + replacement + secondPart
                console.log('Done!');

            } else{
                console.log('The spell was too weak.');
                break;
            }

            break;
        case 'Divination':
            let sub = tokens[1]
            let subString = new RegExp(tokens[1]);
            let replace = tokens[2];
            
              if(spell.includes(sub)){
                for(el of spell){
                    spell = spell.replace(subString, replace);
                    }
                    console.log(spell);
              } else {
                  break;
              } break;

        case 'Alteration':
            let subStr = tokens[1];
            if(!spell.includes(subStr)){
                break;
            }
            spell = spell.replace(subStr,'');
            console.log(spell);
            break;
        default: 
            console.log('The spell did not work!');
            break;
       }

    }


}

// hogwards(["A7ci0",
// "Illusion 1 c",
// "Illusion 4 o",
// "Divination c r",
// "Abjuration",
// "Abracadabra"])
// ;

// console.log('-------');

// hogwards(["TR1GG3R",
// "Necromancy",
// "Illusion 8 m",
// "Illusion 9 n",
// "Abracadabra"])

// hogwards(["SwordMaster",
// "Target Target Target",
// "Abjuration",
// "Necromancy",
// "Alteration master",
// "Abracadabra"])	

// hogwards([
//     'SwordMaster',
//     "Target Target Target",
//     'Abjuration',
//     'Necromancy',
//     'Divination s g',
//     "Alteration word",
//     'Abracadabra'
// ])
















// let spell = data.shift();

// for(let line of data){

//     if(line === 'Abracadabra' ){
//         break;
//     }

//     let tokens = line.split(' ')
//     let command = tokens[0]

    
//     switch(command){
//         case 'Abjuration':
//         spell = spell.toUpperCase();
//         console.log(spell);
//         break;
       
//         case 'Necromancy':
//         spell = spell.toLowerCase();
//         console.log(spell);
//         break;  
      
//         case 'Illusion':
//         let index = Number(tokens[1]);
//         let replacement = tokens[2];

//         if(index < 0 && index > spell.length){
//             console.log(`The spell was too weak.`);
//         } else{
//             let firstPart = spell.substring(0, index);
//             let secondPart = spell.substring(index + 1, spell.length);
//             spell = firstPart + replacement + secondPart
//             console.log('Done!');
//         }break;

//         case 'Divination':
//             let subStr = new RegExp(tokens[1]);
//             let replace = tokens[2];

//             if(spell.includes(subStr)){
//                 for(el of spell){
//                     spell = spell.replace(subStr, replace);
//                     }
//                     console.log(spell);
//             } else {
//                 break;
//             } break;

//         case 'Alteration':
//             let str = tokens[1];
//             if(!spell.includes(str)){
//                 break;
//             }    
//             spell = spell.replace(subStr,'');
//             console.log(spell);
//             break;
//         default:
//             console.log(`The spell did not work!`);
//             break;
        
//     }
    
// }

