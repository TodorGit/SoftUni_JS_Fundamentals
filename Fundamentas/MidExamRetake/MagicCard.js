function magicCards(data){

    let cards = data.shift().split(':');
    let newDeck = [];
    for(let element of data){
        if(element === 'Ready'){
            break;
        }

        let tokens = element.split(' ');
        let cardName;
        let cardNameTwo;
        let index;

        if(tokens.includes("Add")){
            cardName = tokens[1];
                if(cards.includes(cardName)){
                newDeck.push(cardName);
                } else {
                console.log(`Card not found.`);
                }
        } else if(tokens.includes("Insert")){
            cardName = tokens[1];
            index = +tokens[2];

                if(cards.includes(cardName) && index >= 0 && index < newDeck.length){
                newDeck.splice(index, 0 , cardName);
                } else {
                console.log(`Error!`);
                }
        } else if(tokens.includes("Remove")){
            cardName = tokens[1];

                if(newDeck.includes(cardName)){
                    let cardIndex = newDeck.indexOf(cardName);
                    newDeck.splice(cardIndex, 1);
                } else {
                    console.log(`Card not found.`);
                }
        } else if(tokens.includes("Swap")){
                cardName = tokens[1];
                cardNameTwo = tokens[2];
                let i = newDeck.indexOf(cardName);
                let j = newDeck.indexOf(cardNameTwo);

                [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]]

        } else if(tokens.includes("Shuffle")){
                newDeck.reverse();
        } else {
            break;
        }


    }
    console.table(newDeck.join(' '));

}

// magicCards(["Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
// "Add Moonfire",
// "Add Bite",
// "Insert Claw 0",
// "Swap Claw Moonfire",
// "Remove Bite",
// "Ready"])

// magicCards(["Timetwister:CopyArtifact:Lifeweaver:TimeWalk",
// "Add UndergroundSea",
// "Add Timetwister",
// "Remove Wrath",
// "Add CopyArtifact",
// "Shuffle deck",
// "Ready"])

magicCards(["BlackLotus:Bite:Innervate:Moonfire:CopyArtifact",
"Add BlackLotus",
"Insert Claw 1",
"Add Moonfire",
"Add Bite",
"Ready"])





// switch(command){
//     case 'Add':
//         cardName = tokens[1];
//         if(cards.includes(cardName)){
//             newDeck.push(cardName);
//         } else {
//             console.log(`Card not found.`);
//         }
//     break;

//     case 'Insert':
//         cardName = tokens[1];
//         index = +tokens[2];

//         if(cards.includes(cardName) && index >= 0 && index < newDeck.length){
//             newDeck.splice(index, 0 , cardName);
//         } else {
//             console.log(`Error!`);
//         }
//         break;
        
//     case 'Remove':
//         cardName = tokens[1];

//         if(newDeck.includes(cardName)){
//             let cardIndex = newDeck.indexOf(cardName);
//             newDeck.splice(cardIndex, 1);
//         } else {
//             console.log(`Card not found.`);
//         }break;
    
//     case 'Swap':


//         cardName = tokens[1];
//         cardNameTwo = tokens[2];
//         let i = newDeck.indexOf(cardName);
//         let j = newDeck.indexOf(cardNameTwo);

//         [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]]
//         break;
    
//     case '':
//         newDeck.reverse();
//         break;
// }
// }