function steamAccount(arr){
    let index = 0;
    let account = [];
    let games = arr[index];
    index++
    account.push(games)
    let myArray = '';
    let game = '';
  
    while(arr[index] != 'Play!'){
        let curValue = arr[index];

        if(curValue.includes('Install')){
             myArray = curValue.split(" ");
             game = myArray[1];
            account.push(game);
        } else if(curValue.includes('Uninstall')){
            myArray = curValue.split(" ");
            game = myArray[1];
            if(account.includes(game)){
            account.splice(1,1)
            }
        }

        index++
    }
    
    console.log(account.join(" "));

}

steamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']
)