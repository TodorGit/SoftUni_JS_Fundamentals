function secretChat(data){

    let message = data.shift();
    
    for (let element of data) {
        if(element === 'Reveal'){
            break;
        }

        let [command, indexOne, indexTwo] = element.split(':|:');

        switch(command){
            case 'InsertSpace':
                message = message.slice(0, indexOne) + ' ' + message.slice(indexOne);
                console.log(message);
                break;
            case 'Reverse':
                if(message.includes(indexOne)){
                        message = message.replace(indexOne,'');
                        let temp = indexOne.split('').reverse().join('');
                        message += temp;
                        console.log(message);

                } else{
                    console.log('error');
                }break;
            case 'ChangeAll':
                if(message.includes(indexOne)){
                    message = message.split(indexOne).join(indexTwo);
                    console.log(message);

                }
                break;
            default: 
                break;
                
        }
    }

    console.log(`You have a new text message: ${message}`);

}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ])

  secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  )
