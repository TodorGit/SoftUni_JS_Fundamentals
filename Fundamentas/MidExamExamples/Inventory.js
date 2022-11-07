function inventory(data){

let stash = data.shift().split(', ');
index = 0;
while(data[index] !== 'Craft!'){
    let current = data[index].split(' - ');
    let command = current.shift();
    let item = current.shift();

    switch(command){
        case 'Collect': 
            if(!stash.includes(item)){
                stash.push(item);
            }  break;
        case 'Drop': 
            if(stash.includes(item)){
               let itemIndex = stash.indexOf(item);
               stash.splice(itemIndex,1);
            } break;
        case 'Combine Items':
            item = item.split(':');
            let oldItem = item.shift();
            let newItem = item.shift();
            if(stash.includes(oldItem)){
                let itemIndex = stash.indexOf(oldItem);
                stash.splice(itemIndex+1,1,newItem);
            }  break;
        case 'Renew': 
            if(stash.includes(item)){
            let itemIndex = stash.indexOf(item);
            stash.push(stash.splice(itemIndex,1));
            } break;
    
    }


    command = data[index];
    index++
}

console.log(stash.join(', '));
}

// function inventory(input = []) {
//     let items = input.shift().split(', ');
//     let commands = input.shift();
 
//     while (commands !== 'Craft!') {
//         let tokens = commands.split(' - ');
//         let action = tokens[0];
//         let item = tokens[1];
//         let index = items.indexOf(item);
 
//         switch (action) {
//             case 'Collect':
//                 if (index < 0) {
//                     items.push(item)
//                 }
//                 break;
 
//             case 'Drop':
//                 if (index >= 0) {
//                     items.splice(index, 1)
//                 }
//                 break;
 
//                 case 'Combine Items':
//                     let splitted = item.split(':');
//                     let oldItem = splitted[0];
//                     let newItem = splitted[1];
//                     index = items.indexOf(oldItem);
//                     if (index >= 0) {
//                         items.splice(index + 1, 0, newItem);
//                     }
//                     break;
//                     case 'Renew':
//                         if (index >= 0) {
//                             items.splice(index, 1);
//                             items.push(item);
//                         }
//                         break;
//         }
//         commands = input.shift()
//     }
 
//     console.log(items.join(", "))
 
// }

inventory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!']);

console.log('-------------------');

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])