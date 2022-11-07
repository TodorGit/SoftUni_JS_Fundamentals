function inventory(data){

    let collection = data.shift().split(', ');
    
    for(let el of data){
        let [command, firstIndex] = el.split(' - ');

        if(command === 'Craft!'){
            break;
        }
        
        switch(command){
            case 'Collect':
                if(!collection.includes(firstIndex)){
                    collection.push(firstIndex);
                } break;
            case 'Drop': 
                if(collection.includes(firstIndex)){
                    let index = collection.indexOf(firstIndex);
                    collection.splice(index,1);
                } break;
            case 'Combine Items':
                let [oldItem, newItem] = firstIndex.split(':');
                if(collection.includes(oldItem)){
                    let index = collection.indexOf(oldItem);
                    collection.splice(index+1,1,newItem)
                }
                break;
            case 'Renew': 
                if(collection.includes(firstIndex)){
                    let index = collection.indexOf(firstIndex);
                    let item = collection.splice(index,1);
                    collection.push(item);
                } break; 

            default: break ;
        }

        
    }

    console.log(collection.join(', '));
}

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])
  