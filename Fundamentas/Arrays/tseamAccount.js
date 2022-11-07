 tseamAccount = (array) =>{

    let currentGames = array.shift().split(' ');
    let index = 0;

    while(array[index] != 'Play!'){
        let currentInput = array[index].split(' ');
        
        let command = currentInput.shift();
        let game = currentInput.shift();

        switch (command) {
            case 'Install':
                if(!currentGames.includes(game)){
                    currentGames.push(game);
                } break;
            case 'Uninstall':
                if(currentGames.includes(game)){
                    let gameIndex = currentGames.indexOf(game);
                    currentGames.splice(gameIndex, 1);
                } break;
            case 'Update':
                if(currentGames.includes(game)){
                    let gameIndex = currentGames.indexOf(game);
                    let updatedGame = String(currentGames.splice(gameIndex, 1));
                    currentGames.push(updatedGame);                    
                }; break;
            case 'Expansion':
                let originalGame = game.split('-')[0];
                if(currentGames.includes(originalGame)){
                    let expansionGame = game.split('-')[0] + ':' + game.split('-')[1];
                    let gameIndex = currentGames.indexOf(originalGame);
                    currentGames.splice(gameIndex + 1, 0, expansionGame);
                }
        }



        index++
    }


    console.log(currentGames.join(' '));
 }

 tseamAccount(['CS WoW Diablo',
 'Install LoL',
 'Uninstall WoW',
 'Update Diablo',
 'Expansion CS-Go',
 'Play!']
 )