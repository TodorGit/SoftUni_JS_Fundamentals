function imitationGame(data){

    let code = data.shift();
    let index = 0;

    while(data[index] !== "Decode"){
        let currentCommand = data[index];
        let [command, indexOne, indexTwo] = currentCommand.split('|');
        
        switch(command){
            case 'Move':       
                   let firstThree = code.slice(0, indexOne);
                   let rest = code.slice(indexOne)
                   code =  rest + firstThree;
                break;
            case 'Insert':
                let firstPart = code.substring(0, indexOne);
                let secondPart = code.substring(indexOne);
                code = firstPart.concat(indexTwo).concat(secondPart);
                break;
            case 'ChangeAll':
                if(code.includes(indexOne)){
                    code = code.replace(indexOne, indexTwo);
                    code = code.replace(indexOne, indexTwo)
                }
                break;
        }


        index++
    }

    console.log(`The decrypted message is: ${code}`);

}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ])