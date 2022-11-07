function thePianist(data){

    let numOfPieces = Number(data.shift());
    let result = new Map();

    for(let i = 0; i < numOfPieces; i++){
        let [piece, composer,key] = data[i].split('|');

        result.set(piece,[]);
        result.get(piece).push(composer, key);        
    }


    for(element of data){
        if(element === 'Stop'){
            break;
        }

        let tokens = element.split('|');

        let currentPiece;
        let currentComposer;
        let currentKey;

       if(tokens[0].includes('Add')){
            currentPiece = tokens[1];
            currentComposer = tokens[2]
            currentKey = tokens[3];

        if(result.has(currentPiece)){
            console.log(`${currentPiece} is already in the collection!`);
        } else {
          result.set(currentPiece,[]);
          result.get(currentPiece).push(currentComposer)
          result.get(currentPiece).push(currentKey)
          console.log(`${currentPiece} by ${currentComposer} in ${currentKey} added to the collection!`);
        }
       } else if(tokens[0].includes('Remove')){
                currentPiece = tokens[1];
            if(result.has(currentPiece)){
                result.delete(currentPiece);
                console.log(`Successfully removed ${currentPiece}!`);
            } else { 
                console.log(`Invalid operation! ${currentPiece} does not exist in the collection.`);
            }
       } else if(tokens[0].includes('ChangeKey')){
             currentPiece = tokens[1];
         let newKey = tokens[2];

            if(!result.has(currentPiece)){
                console.log(`Invalid operation! ${currentPece} does not exist in the collection.`);
            } else {
                result.get(currentPiece)[1] = newKey;
                console.log(`Changed the key of ${currentPiece} to ${newKey}!`);
            }
       }
    }

    for(let [key,value] of result){
        console.log(`${key} -> Composer: ${value[0]}, Key: ${value[1]}`);
    }
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ])